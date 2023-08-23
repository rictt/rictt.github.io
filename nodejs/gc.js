
const showUsage = () => {
  const usage = process.memoryUsage()
  const format = (num) => {
    return (num / 1024 / 1024).toFixed(2) + ' MB'
  }
  console.log(`
    rss(常驻内存空间):     ${format(usage.rss)}
    heapTotal(堆总计):    ${format(usage.heapTotal)}
    heapUsed(堆已用):     ${format(usage.heapUsed)}
  `)
}

const total = []
const useMemo = () => {
  const size = 20 * 1024 * 1024
  const arr = new Array(size)
  for (let i = 0; i < size; i++) {
    arr[i] = 0
  }
  return arr
}

const useMemoByBuffer = () => {
  const size = 20 * 1024 * 1024
  const buffer = new Buffer(size)
  for (let i = 0; i < size; i++) {
    buffer[i] = 0
  }
  return buffer
}

const main = () => {
  for (let i = 0; i < 30; i++) {
    showUsage()
    total.push(useMemoByBuffer())
  }
  // for (let i = 0; i < 30; i++) {
  //   showUsage()
  //   total.push(useMemo())
  // }
}

main()