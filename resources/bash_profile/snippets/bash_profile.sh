# [START input_line]
# Add git branch to input line
parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
# Make input line colorful
export PS1="\[\033[36m\]\u\[\033[m\]@\[\033[32m\]\h:\[\033[33;1m\]\w\[\033[m\]\[\033[32m\]\$(parse_git_branch)\[\033[00m\]$ "
# [END input_line]


# [START iterm]
# Use iterm
export TERM_PROGRAM=iTerm.app
# Ansi Colors in iTerm2
export CLICOLOR=1
# Default iterm profile for new shells
export ITERM_PROFILE=Default
# Enable iterm shell integration
test -e ${HOME}/.iterm2_shell_integration.bash && source ${HOME}/.iterm2_shell_integration.bash
# [END iterm]


# [START shlvl]
# How many shells deep are we?
# See: https://www.lifewire.com/why-would-you-use-shivi-variable-2196747
export SHLVL=1
# [END shlvl]


# [START bash_history]
# Ignore duplicate bash history entries
export HISTCONTROL='ignoredups'
# See: https://stackoverflow.com/a/19454838/3955523
# The number of lines that are stored in memory while your bash session is ongoing.
export HISTSIZE='2000'
# The number of lines or commands that:
#   (a) Are allowed in the history file at startup time of a session.
#   (b) Are stored in the history file at the end of a session for use in future sessions.
export HISTFILESIZE='10000'
# [END bash_history]


# [START brew_autocomplete]
# Enable brew bash completion
if [ -f `brew --prefix`/etc/bash_completion ]; then
    . `brew --prefix`/etc/bash_completion
fi
# [END brew_autocomplete]


# [START pyenv]
# Enable pyenv
export PYENV_ROOT=/usr/local/var/pyenv
if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi
# [END pyenv]


# [START nvm]
NVM_INIT_PATH="$HOME/.nvm/nvm.sh"
if [ -f "${NVM_INIT_PATH}" ]; then
  source "${NVM_INIT_PATH}"
fi
# [END nvm]


# [START gcloud]
# The next line updates PATH for the Google Cloud SDK.
GCLOUD_SDK_PATH="$HOME/google-cloud-sdk"
if [ -f "${GCLOUD_SDK_PATH}/path.bash.inc" ]; then
  source "${GCLOUD_SDK_PATH}/path.bash.inc"
fi

# The next line enables shell command completion for gcloud.
if [ -f "${GCLOUD_SDK_PATH}/completion.bash.inc" ]; then
  source "${GCLOUD_SDK_PATH}/completion.bash.inc"
fi
# [END gcloud]


# [START brew_node]
# Use brew installed node and npm
BREW_NODE_PATH='/usr/local/opt/node@6/bin'
if [ -d $BREW_NODE_PATH ]; then
  export PATH="$PATH:$BREW_NODE_PATH"
fi
# [END brew_node]


# [START yarn_global]
YARN_GLOBAL_PATH="$HOME/.config/yarn/global/node_modules/.bin"
if [ -d $YARN_GLOBAL_PATH ]; then
  export PATH="$PATH:$YARN_GLOBAL_PATH"
fi
# [END yarn_global]


# [START gpg]
# Git gpg signing support
export GPG_TTY=$(tty)
# [END gpg]


# [START git_kraken]
# GitKraken cli
alias kraken="open -na 'GitKraken' --args -p $(pwd)"
# [END git_kraken]


# [START default_editor]
# Default text editor for things like `git`
export EDITOR='code --wait'
# [END default_editor]


# [START user_local_bin]
USER_LOCAL_BIN_PATH="$HOME/.local/bin"
if [ -d $USER_LOCAL_BIN_PATH ]; then
  export PATH="$PATH:$USER_LOCAL_BIN_PATH"
fi
# [END user_local_bin]
