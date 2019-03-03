#!/bin/sh
git checkout source
git push -f --delete origin master
git subtree push --prefix docs/ origin master
