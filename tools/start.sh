#!/bin/bash

bash tools/print-header.sh
echo "▸ Starting the project"
bash tools/client.sh | bash tools/server.sh

echo "◂"
