# Use brew installed node and npm
BREW_NODE_PATH='/usr/local/opt/node@6/bin'
if [ -d $BREW_NODE_PATH ]; then
  export PATH="$PATH:$BREW_NODE_PATH"
fi
