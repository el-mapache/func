import { Just, Nothing } from 'data.maybe';

const traverse = path => obj => {
  let keys = path.slice();
  let resolved = obj;
  let key;

  while ((key = keys.shift())) {
    resolved = resolved[key];

    if (!resolved) new Nothing();
  }

  return new Just(resolved);
};

export default traverse;
