#!/bin/bash

cd dist

echo "▸ Cleaning dist/ folder"

ls -lhp
rm package.json
rm package-lock.json
rm server.bundle.js

ls -lhp public/
rm -r public

echo "◂"
