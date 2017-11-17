# Ignore duplicate bash history entries
export HISTCONTROL='ignoredups'
# See: https://stackoverflow.com/a/19454838/3955523
# The number of lines that are stored in memory while your bash session is ongoing.
export HISTSIZE='2000'
# The number of lines or commands that:
#   (a) Are allowed in the history file at startup time of a session.
#   (b) Are stored in the history file at the end of a session for use in future sessions.
export HISTFILESIZE='10000'
