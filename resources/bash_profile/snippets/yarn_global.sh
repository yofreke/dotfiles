YARN_GLOBAL_PATH="$HOME/.config/yarn/global/node_modules/.bin"
if [ -d $YARN_GLOBAL_PATH ]; then
  export PATH="$PATH:$YARN_GLOBAL_PATH"
fi
