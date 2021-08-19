#!/bin/sh

#for build update

cp -r build/* docs/
rm -r docs/assets/icon
git add .