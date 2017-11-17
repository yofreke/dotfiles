import Promise from 'bluebird';
import debug from 'debug';


const log: Function = debug('dotfiles:activePromises');


const activePromises: Promise[] = [];


export const addActivePromise = function(promise: Promise): void {
  activePromises.push(promise);
  log('addActivePromise: newCount=', activePromises.length);
};


export const waitForActivePromises = function(): Promise<void> {
  return new Promise((resolve, reject) => {
    let tryCount: number = 0;
    const interval = setInterval(() => {
      tryCount++;
      // log('> tryCount=', tryCount);
      // Remove done promises from activePromises
      for (let i = activePromises.length - 1; i >= 0; i--) {
        const promise: Promise = activePromises[i];
        if (promise.isFulfilled()) {
          log(`> Promise at ${i} isFulfilled`);
          activePromises.splice(i, 1);
        }
        if (promise.isRejected()) {
          log(`> Promise at ${i} isRejected`);
          activePromises.splice(i, 1);
        }
      }
      // Done with all of them!
      if (activePromises.length === 0) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
};
