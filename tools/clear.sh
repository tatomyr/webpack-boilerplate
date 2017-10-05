#!/bin/bash


bash tools/print-header.sh
echo "▸ Cleaning dist/ folder"
cd dist
ls -lhp
rm package.json
rm package-lock.json
rm server.bundle.js

ls -lhp public/
rm -r public

echo "◂"
