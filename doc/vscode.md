# VS Code

## Extension List

### 1. List local extensions

```bash
$ code --list-extensions
```

### 2. Deduplicate resulting list

See: [TextWidgets - DeDupe List](http://www.textwidgets.com/dedupelist.html#startresults)

### 3. Final list

```

57 original lines, 6 removed, 51 remaining.

74th.scrollkey
EditorConfig.EditorConfig
GrapeCity.gc-excelviewer
PeterJausovec.vscode-docker
RoscoP.ActiveFileInStatusBar
alefragnani.Bookmarks
Arjun.swagger-viewer
artdiniz.quitcontrol-vscode
castwide.solargraph
coolbear.systemd-unit-file
DavidAnson.vscode-markdownlint
dbaeumer.vscode-eslint
donjayamanne.githistory
dzannotti.vscode-babel-coloring
gerane.Theme-OceanicNext
jebbs.plantuml
mechatroner.rainbow-csv
mimarec.swagger-doc-viewer
minhthai.vscode-todo-parser
mohsen1.prettify-json
ms-python.python
ms-vscode.vscode-typescript-tslint-plugin
ms-vsliveshare.vsliveshare
rbbit.typescript-hero
rebornix.ruby
shardulm94.trailing-spaces
shinnn.stylelint
shinnn.swiftlint
sleistner.vscode-fileutils
streetsidesoftware.code-spell-checker
stringham.move-ts
sysoev.language-stylus
karunamurti.haml
vscode-icons-team.vscode-icons
vtfn.stylint
wingrunr21.vscode-ruby
wk-j.webpack-progress
bierner.github-markdown-preview
bierner.markdown-checkbox
bierner.markdown-emoji
bierner.markdown-preview-github-styles
bierner.markdown-yaml-preamble
esbenp.prettier-vscode
felixfbecker.php-debug
felixfbecker.php-intellisense
felixfbecker.php-pack
geeksharp.openssl-configuration-file
Gruntfuggly.todo-tree
ms-azuretools.vscode-docker
shyykoserhiy.vscode-spotify
VisualStudioExptTeam.vscodeintellicode
maptz.regionfolder
```

## Keybindings

```json5
// Place your key bindings in this file to override the defaults
[
  // Extension config: prettier
  { "key": "ctrl+f", "command": "editor.action.formatDocument" },

  // #region Extension config: scrollkey
  {
    "key": "ctrl+up",
    "command": "scrollkey.up1",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+down",
    "command": "scrollkey.down1",
    "when": "editorTextFocus"
  },
  {
    "key": "shift+ctrl+up",
    "command": "scrollkey.up2",
    "when": "editorTextFocus"
  },
  {
    "key": "shift+ctrl+down",
    "command": "scrollkey.down2",
    "when": "editorTextFocus"
  },
  // #endregion

  // #region Personal config: Arrow keys to switch active editor pane
  {
    "key": "ctrl+left",
    "command": "workbench.action.focusPreviousGroup",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+right",
    "command": "workbench.action.focusNextGroup",
    "when": "editorTextFocus"
  },
  // #endregion

  // #region Personal config: Make show git shortcut consistent with show file tree
  {
    "key": "cmd+shift+g",
    "command": "workbench.view.scm"
  },
  {
    "key": "ctrl+shift+g",
    "command": "editor.action.previousMatchFindAction",
    "when": "editorFocus"
  },
  // #endregion

  // #region Personal config: Expand select with similar binds to select by word
  {
    "key": "alt+shift+down",
    "command": "editor.action.smartSelect.grow",
    "when": "editorTextFocus"
  },
  {
    "key": "alt+shift+up",
    "command": "editor.action.smartSelect.shrink",
    "when": "editorTextFocus"
  },
  // #endregion

  // #region Personal config: Quick switch windows
  {
    "key": "cmd+r",
    "command": "workbench.action.quickSwitchWindow"
  },
  {
    "key": "cmd+r",
    "command": "workbench.action.quickOpenNavigateNext",
    "when": "inWindowsPicker"
  },
  // #endregion

  // Personal config: Run tests
  {
    "key": "ctrl+h",
    "command": "workbench.action.tasks.runTask",
    "args": "Run Tests"
  }
]
```

## User Settings

```json5
{
  // ---- Disable defaults ----

  // Disable default: "automatic updating of import paths when you rename or move a file"
  // -> I have never had 100% current automatic import updates from JS or TS projects.
  "javascript.updateImportsOnFileMove.enabled": "never",
  "typescript.updateImportsOnFileMove.enabled": "never",

  // Disable default: "explorer should automatically reveal and select files when opening them"
  // -> Prefer to do on a per file basis, when project has many files.
  "explorer.autoReveal": false,

  // Disable default: "automatically adjust the indentation when users type, paste ..."
  "editor.autoIndent": "none",

  // Disable default: "Wrapped lines get the same indentation as the parent."
  "editor.wrappingIndent": "none",

  //  ---- Preferences ----

  // Preference: Extended light color theme, uses larger pallette
  "workbench.colorTheme": "Default Light+",

  // Preference: By default less of 80 character limit spent on whitespace.
  "editor.tabSize": 2,

  // Preference: Show line in editor, good habit for working on laptops.
  "editor.rulers": [80, 120],

  // Preference: Use global installation of eslint if none is found in project
  // "A path added to NODE_PATH when resolving the eslint module."
  "eslint.nodePath": "/usr/local/lib/node_modules",

  // Preference: Opt in to extension updates, since they have high visibility
  // to sensitive material.
  "extensions.autoUpdate": false,

  // Preference: Quicker command pallette use
  // "whether the last typed input ... should be restored when opening it the next time"
  "workbench.commandPalette.preserveInput": true,

  // Preference: Always show location in file on minimap with slider
  "editor.minimap.showSlider": "always",

  // Preference: Also source autocomplete from comments and strings
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
  },

  // Preference: Scripting is easier with linters, flake8 is good at catching
  // issues before runtime.
  "python.linting.flake8Enabled": true,

  // #region Preference: Enable codelens on scripts
  "javascript.referencesCodeLens.enabled": false,
  "javascript.referencesCodeLens.showOnAllFunctions": true,
  "typescript.implementationsCodeLens.enabled": true,
  "typescript.referencesCodeLens.enabled": true,
  "typescript.referencesCodeLens.showOnAllFunctions": true,
  // #endregion

  // Preference: Always show available UI
  "editor.showFoldingControls": "always",

  // ---- Extensions ----

  // #region Extension config vsintellicode: prefer intellisense over recently used
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  // #endregion

  // Extension config prettier: Use prettier always
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // #region Extension config vsicons
  // Usually working on large projects.
  // "For large projects, local or remote, it's HIGHLY recommended to disable this feature."
  "vsicons.projectDetection.disableDetect": true,
  "workbench.iconTheme": "vscode-icons",
  "vsicons.dontShowNewVersionMessage": true,
  // #endregion

  // Extension config redhat.vscode-yaml: Support CloudFormation custom tags
  // Taken from a github issue, https://github.com/adamvoss/vscode-yaml/issues/16
  "yaml.customTags": [
    "!Base64 mapping",
    "!Equals sequence",
    "!FindInMap sequence",
    "!GetAtt",
    "!GetAtt sequence",
    "!GetAZs",
    "!ImportValue",
    "!Join sequence",
    "!Ref",
    "!Select sequence",
    "!Split sequence",
    "!Sub"
  ],

  // #region Extension config todo-tree: Add custom tags, custom colors
  "todo-tree.filtering.useBuiltInExcludes": true,
  "todo-tree.general.statusBar": "tags",
  "todo-tree.tree.expanded": true,
  "todo-tree.tree.hideIconsWhenGroupedByTag": true,
  "todo-tree.tree.showCountsInTree": true,
  "todo-tree.general.tags": ["BOOKMARK", "TODO", "FIXME"],
  "todo-tree.highlights.customHighlight": {
    "BOOKMARK": {
      "icon": "bookmark",
      "iconColour": "#6CB8D5",
      "type": "whole-line",
      "background": "#6CB8D5",
      "foreground": "#000",
      "opacity": 50,
      "fontWeight": "600"
    },
    "TODO": {
      "icon": "issue-opened",
      "iconColour": "#FFBD33",
      "type": "whole-line",
      "background": "#FFBD33",
      "foreground": "#000",
      "opacity": 50,
      "fontWeight": "600"
    },
    "FIXME": {
      "icon": "alert",
      "iconColour": "#D3573D",
      "type": "whole-line",
      "background": "#D3573D",
      "foreground": "#000",
      "opacity": 50,
      "fontWeight": "600"
    }
  },
  // #endregion

  // Extension config rebornix.ruby: Favor new language server support
  "ruby.useLanguageServer": true,

  // #region Extension config rebornix.ruby: Use rubocop for lint and format
  "ruby.useBundler": true,
  "ruby.lint": {
    "rubocop": {
      "useBundler": true
    }
  },
  "ruby.format": "rubocop",
  // #endregion

  // Extension config maptz.regionfolder: Region folding in custom languages
  "maptz.regionfolder": {
    "[haml]": {
      "foldEndRegex": "^[\\t ]*-[#\\t ]*#endregion[^\\n]*$",
      "foldStartRegex": "^[\\t ]*-[#\\t ]*#region[^\\n]*$"
    },
    "[ruby]": {
      "foldEndRegex": "^[#\\t ]*#endregion[^\\n]*$",
      "foldStartRegex": "^[#\\t ]*#region[^\\n]*$"
    }
  }
}
```
