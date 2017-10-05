#!/bin/bash

bash tools/print-header.sh
echo "▸ Starting the project"
bash tools/copy-assets.sh
trap 'kill $!' EXIT # This command means that all processes will be killed on ^C
bash tools/serve.sh &
# Open localhost address in default browser
sensible-browser http://localhost:8080 # You'll probably want to comment this row
bash tools/server.sh

echo "◂"
