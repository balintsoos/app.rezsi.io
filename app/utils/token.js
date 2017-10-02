const key = 'api-token';

export default {
  get: () => sessionStorage.getItem(key),
  set: (value) => sessionStorage.setItem(key, value),
  delete: () => sessionStorage.deleteItem(key),
  exist: () => !!sessionStorage.getItem(key),
};
