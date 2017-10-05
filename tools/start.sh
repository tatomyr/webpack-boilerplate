#!/bin/bash

bash tools/print-header.sh
echo "▸ Starting the project"
bash tools/copy-assets.sh
trap 'kill $!' EXIT # This command means that all processes will be killed on ^C
bash tools/serve.sh | bash tools/server.sh

echo "◂"
