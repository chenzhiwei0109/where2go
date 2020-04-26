set -e
cd dist
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:chenzhiwei0109/where2go.git master:gh-pages

cd -