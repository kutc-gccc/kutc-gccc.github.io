#!/bin/sh
git checkout source
echo "gccc.dev" > ./docs/CNAME
git add -A ./docs/CNAME
git commit -m "deploy CNAME"
git push -f --delete origin master
git subtree push --prefix docs/ origin master
