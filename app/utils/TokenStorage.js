
export const makeGet = (sessionStorage, key) =>
  () => sessionStorage.getItem(key);

export const makeSet = (sessionStorage, key) =>
  (value) => sessionStorage.setItem(key, value);

export const makeExist = (sessionStorage, key) =>
  () => !!sessionStorage.getItem(key);

export const makeRemove = (sessionStorage, key) =>
  () => sessionStorage.removeItem(key);

export const key = 'api-token';

const token = {
  get: makeGet(sessionStorage, key),
  set: makeSet(sessionStorage, key),
  exist: makeExist(sessionStorage, key),
  remove: makeRemove(sessionStorage, key),
};

export default token;
