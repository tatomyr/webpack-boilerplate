#!/bin/bash

bash tools/print-header.sh
# Copying assets
bash tools/copy-assets.sh

echo "▸ Build client"
webpack -p

echo "▸ Build server"
webpack -p --config webpack.server-config.babel.js

echo "◂"
