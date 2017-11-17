import Promise from 'bluebird';
import path from 'path';
import debug from 'debug';
import fse from 'fs-extra';
import Mustache from 'mustache';
import TEMPLATE_INPUT from 'raw-loader!../../resources/bash_profile/bash_profile.mustache';
import inquirer from 'inquirer';


const SNIPPETS_DIR: string = path.join(__dirname, '..', 'resources', 'bash_profile', 'snippets');
const HEADER_TEXT: string = '# ----\n# THIS FILE IS GENERATED, EDITS WILL BE LOST\n# See `dotfiles bashProfile --help`\n# ----\n\n';


const log: Function = debug('dotfiles:bashProfile:generateBashProfile');


export interface IGenerateBashProfileOpts {
  cwd: string;
}


interface ITemplateOpts {
  header: string;
  snippets: ISnippet[];
}


const loadSnippets = function(): Promise<ISnippet[]> {
  log('loadSnippets: SNIPPETS_DIR=', SNIPPETS_DIR);
  return findSnippets(SNIPPETS_DIR)
  .then((snippetPaths: string[]) => {
    return readSnippets(snippetPaths);
  });
};


const confirmSnippets = function(
  allSnippets: ISnippet[]
): Promise<ISnippet[]> {
  const choices = allSnippets.map(s => {
    return {
      name: s.name,
      checked: true
    };
  });

  choices.push(new inquirer.Separator(' = End of list = '));

  return inquirer.prompt([{
    type: 'checkbox',
    message: 'Select snippets to include:',
    name: 'selectedSnippets',
    choices,
    pageSize: Math.min(allSnippets.length, 16)
  }])
  .then((answers) => {
    const selected: string[] = answers.selectedSnippets;
    log('> Selected:', selected.join(', '));
    return allSnippets.filter(s => selected.indexOf(s.name) >= 0);
  });
};


export const generateBashProfile = function(
  opts: IGenerateBashProfileOpts
): Promise<void> {
  log('generateBashProfile opts=', opts);
  return loadSnippets()
  .then((snippets: ISnippet[]) => {
    return confirmSnippets(snippets);
  })
  .then((snippets: ISnippet[]) => {
    const templateOpts: ITemplateOpts = {
      header: HEADER_TEXT,
      snippets
    };
    log('> templateOpts=', templateOpts);
    const templateOutput: string = Mustache.render(TEMPLATE_INPUT, templateOpts);
    log('> templateOutput:\n', templateOutput);

    // TODO: Confirm output
    // TODO: Write to `~/.bash_profile`
  });
};


const findSnippets = function(dir: string): Promise<string[]> {
  log('findSnippets dir=', dir);
  return Promise.resolve(fse.readdir(dir))
  .then((files: string[]) => {
    const results: string[] = files.map(fileName => path.join(dir, fileName));
    log('> files=', results);
    return results;
  });
};


interface ISnippet {
  name: string;
  content: string;
}


const readSnippets = function(snippetPaths: string[]): Promise<ISnippet[]> {
  return Promise.mapSeries(snippetPaths, (snippetPath: string) => {
    return Promise.resolve(fse.readFile(snippetPath))
    .then((buffer: Buffer) => {
      return {
        name: path.parse(snippetPath).name,
        content: buffer.toString('utf8')
      };
    })
  });
};
