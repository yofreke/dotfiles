import { addActivePromise } from '../activePromises';
import { generateBashProfile } from './generateBashProfile';
import * as yargs from 'yargs';


export const bashProfileCommand: yargs.CommandModule = <yargs.CommandModule> {
  command: 'bashProfile',
  describe: 'Template a new ~/.bash_profile, back up the old one, write the new one.  Optional snippet inclusion.',

  builder: function(yargs: yargs.Argv): yargs.Argv {
    return yargs.help('h');
  },

  handler: function(argv: yargs.Argv): void {
    addActivePromise(generateBashProfile({
      cwd: process.cwd()
    }));
  }
};
