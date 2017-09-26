import * as Promise from 'bluebird';
import debug from 'debug';


const log: Function = debug('dotfiles:bashProfile:generateBashProfile');


export interface IGenerateBashProfileOpts {}

export const generateBashProfile = function(opts: IGenerateBashProfileOpts): Promise<void> {
  log('generateBashProfile opts=', opts);
  return Promise.resolve();
};
