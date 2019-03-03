#!/bin/sh
git checkout source
echo "gccc.dev" > ./docs/CNAME
git push -f --delete origin master
git subtree push --prefix docs/ origin master
