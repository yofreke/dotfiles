#!/bin/bash
set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

FROM="$DIR/bash_profile.sh"
TO="$HOME/.bash_profile"

echo -e "\nCopying $FROM to $TO"
cp $FROM $TO

echo -e "\nTo source the new bash_profile, run:\n. $TO\n"
