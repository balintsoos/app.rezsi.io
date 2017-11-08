export const makeGetUrl = (baseUrl) =>
  (endpoint) => `${baseUrl}${endpoint}`;

export const makeGetOptions = ({ merge, defaults, TokenStorage }) =>
  (options) => {
    const params = [{}, defaults, options];

    if (TokenStorage.exist()) {
      params.push({
        headers: {
          Authorization: `Bearer ${TokenStorage.get()}`,
        },
      });
    }

    return merge(...params);
  };

export const makeCall = ({ request, getUrl, getOptions }) =>
  (endpoint, options) => request(getUrl(endpoint), getOptions(options));

export const makeGet = ({ call, merge }) =>
  (endpoint, options) =>
    call(endpoint, merge({ method: 'GET' }, options));

export const makePost = ({ call, merge }) =>
  (endpoint, payload, options) =>
    call(endpoint, merge({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }, options));

export const makePatch = ({ call, merge }) =>
  (endpoint, payload, options) =>
    call(endpoint, merge({
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }, options));

export const makeDelete = ({ call, merge }) =>
  (endpoint, options) =>
    call(endpoint, merge({ method: 'DELETE' }, options));
