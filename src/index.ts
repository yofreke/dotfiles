import debug from 'debug';
import * as yargs from 'yargs';
import { bashProfileCommand } from './bashProfile';


const log: Function = debug('dotfiles:main');


const main = function(): void {
  log('Hello!');
  const localYargs: yargs.Argv = yargs
    .command(bashProfileCommand)
    .demandCommand(1)
    .help('h');
  const commandArguments: yargs.Arguments = localYargs.argv;
  log('commandArguments=', commandArguments);
};


main();
