#!/bin/bash
# You read this before running it, right?
set -e

REPO="username-maxim/vibex"
BRANCH="main"
INSTALL_DIR="/usr/local/bin"

echo "[vibex] Installing vibex..."
curl -fsSL "https://raw.githubusercontent.com/$REPO/$BRANCH/vibex" \
    -o "$INSTALL_DIR/vibex"
chmod +x "$INSTALL_DIR/vibex"
echo "[vibex] Done."
echo "[vibex] Add your API key:"
echo "        echo 'VIBEX_API_KEY=your-key' >> ~/.vibex.env"
