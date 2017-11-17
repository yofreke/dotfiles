# Use iterm
export TERM_PROGRAM=iTerm.app
# Ansi Colors in iTerm2
export CLICOLOR=1
# Default iterm profile for new shells
export ITERM_PROFILE=Default
# Enable iterm shell integration
test -e ${HOME}/.iterm2_shell_integration.bash && source ${HOME}/.iterm2_shell_integration.bash
