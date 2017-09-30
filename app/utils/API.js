import request from 'utils/request';

export function createApiConnector(baseUrl = '') {
  const defaultOptions = {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const call = (endpoint, options) => request(
    `${baseUrl}${endpoint}`,
    Object.assign(defaultOptions, options)
  );

  return {
    login: (payload) => call('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

    signUp: (payload) => call('/users', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  };
}

const baseUrl = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:4040/api/v1'
  : 'https://api-rezsi.herokuapp.com/api/v1';

export default createApiConnector(baseUrl);
