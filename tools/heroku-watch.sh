#!/bin/bash

bash tools/print-header.sh
echo "▸ Watching the deployment server logs"
cd dist/
heroku logs --tail

echo "◂"
