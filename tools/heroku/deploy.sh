#!/bin/bash

bash tools/print-header.sh

# Building for production
bash tools/build.sh

echo "▸ Creating local package.json"
babel-node tools/heroku/set-deployment.js

echo "▸ Copying package-lock.json to dist/ folder"
cp ./package-lock.json dist/package-lock.json

echo "▸ Pushing to Heroku repository"
cd dist/
git add . && git commit -m 'deployment commit'
git push heroku master -f

# ? Excessive precautions
git reset --soft HEAD^

echo "◂"
