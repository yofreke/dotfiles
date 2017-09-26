import path from 'path';
import * as Promise from 'bluebird';
import debug from 'debug';
import fse from 'fs-extra';
import Mustache from 'mustache';
import TEMPLATE_INPUT from 'raw-loader!../../resources/bash_profile/bash_profile.mustache';


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


export const generateBashProfile = function(opts: IGenerateBashProfileOpts): Promise<void> {
  log('generateBashProfile opts=', opts);
  return findSnippets(SNIPPETS_DIR)
  .then((snippetPaths: string[]) => {
    return readSnippets(snippetPaths);
  })
  .then((snippets: ISnippet[]) => {
    const templateOpts: ITemplateOpts = {
      header: HEADER_TEXT,
      snippets
    };
    const templateOutput: string = Mustache.render(TEMPLATE_INPUT, templateOpts);
    log('> templateOutput:\n', templateOutput);
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
