USER_LOCAL_BIN_PATH="$HOME/.local/bin"
if [ -d $USER_LOCAL_BIN_PATH ]; then
  export PATH="$PATH:$USER_LOCAL_BIN_PATH"
fi
