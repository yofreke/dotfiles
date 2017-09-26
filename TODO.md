# TODO

## `dotfiles itermPreferences`

- Implement

## `dotfiles bashProfile`

- Implement
  - Read files from `resources/bash_profile_snippets/`
  - Back up current `~/.bash_profile` to `~/.dotfiles/backups/bash_profile/<now date>.sh`
  - Generate a template using `mustache`
  - Use [`enquirer`](https://github.com/enquirer/enquirer) to select which snippets to include
