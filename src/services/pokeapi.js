import { of, Right, Left } from 'data.either';
import Task from 'data.task';
import request from 'request';
import parse from '../modules/parse';

const API_BASE = 'https://pokeapi.co/api/v2';

const ok = x => x === 200;

const checkError = r =>
  parse(r.body)
    .chain(x => ok(r.statusCode) ? new Right(x) : new Left(x));

// use a transform -- unwrap the value from fold and then wrap it in a task;
// Since `e` will be either a `Left` or a `Right`, the value of the
// either will be rewrapped in the appropriate task
// Remember that Left.fold will always call the first function that was supplied,
// and Right.fold will call the second
const eitherToTask = e =>
  e.fold(Task.rejected, Task.of);

const httpGet = url => {
  return new Task((reject, resolve) => {
    return request(`${API_BASE}/${url}`, (error, response, body) => {
      return error ? reject(error) : resolve(response);
    });
  });
};

const getPokemon = name => {
  return of(name)
    .chain(x => httpGet(`pokemon/${x}`))
    .map(checkError)
    .chain(eitherToTask);
};

export default getPokemon;
