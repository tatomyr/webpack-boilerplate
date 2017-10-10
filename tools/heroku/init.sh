#!/bin/bash

bash tools/print-header.sh
echo "▸ Initializing heroku environment"
mkdir dist/
cd dist/
git init
read -p "INPUT THE HEROKU PROJECT NAME: " name
heroku git:remote -a $name

echo "▸ dist/ folder is set up with remote heroku repository:"
git remote -v

echo "◂"
