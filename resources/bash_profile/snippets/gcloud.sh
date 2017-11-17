# The next line updates PATH for the Google Cloud SDK.
GCLOUD_SDK_PATH="$HOME/google-cloud-sdk"
if [ -f "${GCLOUD_SDK_PATH}/path.bash.inc" ]; then
  source "${GCLOUD_SDK_PATH}/path.bash.inc"
fi

# The next line enables shell command completion for gcloud.
if [ -f "${GCLOUD_SDK_PATH}/completion.bash.inc" ]; then
  source "${GCLOUD_SDK_PATH}/completion.bash.inc"
fi
