#!/bin/bash

echo "▸ Copying essential files to dist/public/assets/ folder"
mkdir dist/
mkdir dist/public/
cp -r src/assets/ dist/public/

echo "◂"
