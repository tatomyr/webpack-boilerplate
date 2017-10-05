#!/bin/bash

bash tools/print-header.sh
echo "▸ Starting server"
webpack -p --config webpack.server-config.babel.js && cd dist/ && node server.bundle.js

echo "◂"
