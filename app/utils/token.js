const key = 'api-token';

export const get = () => sessionStorage.getItem(key);
export const set = (value) => sessionStorage.setItem(key, value);
export const remove = () => sessionStorage.removeItem(key);
export const exist = () => !!sessionStorage.getItem(key);
