const path = require('path')
const fs = require('fs')

const excludeDir = ['.vuepress', '.DS_Store']
const basePath = path.join(__dirname, '../../')
const isDir = (pathname) => {
  const isExist = fs.existsSync(pathname)
  if (!isExist) {
    return false
  }
  const stat = fs.statSync(pathname)
  return stat.isDirectory()
}

const readDirs = (pathname, excludeDir) => {
  let dirs = fs.readdirSync(pathname)
  if (excludeDir && Array.isArray(excludeDir)) {
    dirs = dirs.filter(dirname => {
      return !excludeDir.includes(dirname)
    })
  }
  return dirs.filter(dir => isDir(path.join(pathname, dir)))
}

const readFiles = (pathname, includeList = ['html', 'md']) => {
  let files = fs.readdirSync(pathname)
  files = files.filter(filename => {
    const postFixList = filename.split('.')
    const postFixName = postFixList[postFixList.length - 1]
    return includeList.includes(postFixName) && !isDir(path.join(pathname, filename))
  })
  return files
}

const dirs = readDirs(basePath, excludeDir)

const generateChildrenSidebars = (dirname) => {
  const pathname = path.join(basePath, dirname)
  const subDirs = readDirs(pathname)
  const children = []
  // 暂时不考虑第三级结构了
  if (subDirs && subDirs.length) {
  }
  const subFiles = readFiles(pathname)
  if (subFiles && subFiles.length) {
    subFiles.forEach(file => {
      const isREADME = file === 'README.md'
      if (!isREADME) {
        const filenameStr = file.replace(/([0-9]-)|(\s)|(.md)|(.html)/gi, '')
        children.push({
          title: filenameStr,
          path: '/' + dirname + '/' + file,
        })
      }
    })
  }

  return children
}

const generateSidebars = () => {
  const result = dirs.map(e => {
    return {
      title: e,
      path: '/' + e + '/',
      children: generateChildrenSidebars(e)
    }
  })
  fs.writeFileSync(path.join(basePath, '../sidebar.json'), JSON.stringify({ result }, null, 2))
  return result
}

module.exports = {
  generateSidebars
}