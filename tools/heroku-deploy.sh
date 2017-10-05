#!/bin/bash

echo "▸ Build for production"
webpack -p
webpack -p --config webpack.server-config.babel.js

echo "▸ Creating local package.json"
babel-node tools/set-deployment.js

echo "▸ Copying package-lock.json to dist/ folder"
cp ./package-lock.json dist/package-lock.json
# cp -r src/assets/ dist/public/assets/
bash tools/copy-assets.sh

echo "▸ Pushing to Heroku repository"
cd dist/
git add . && git commit -m 'deployment commit'
git push heroku master -f

# ? Excessive precautions
git reset --soft HEAD^

echo "◂"
