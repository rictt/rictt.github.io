#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 因为初始化的分支，可能是main或者master，如果不在后面指定分支的话，而后面push用了自定义分支名称的话，会导致一直push不上去
git init -b gh-pages
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:rictt/rictt.github.io.git gh-pages
git push -f git@github.com:rictt/rictt.github.io.git gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -