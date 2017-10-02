import request from 'utils/request';
import token from 'utils/token';
import merge from 'utils/merge';

export class ApiConnector {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
    this.default = {
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  }

  options = () => {
    if (!token.exist()) {
      return this.default;
    }

    return merge(this.default, {
      headers: {
        Authorization: `Bearer ${token.get()}`,
      },
    });
  }

  call = (endpoint, options) => request(
    `${this.baseUrl}${endpoint}`,
    merge(this.options(), options)
  )

  login = (payload) => this.call('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  signUp = (payload) => this.call('/users', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

const baseUrl = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:4040/api/v1'
  : 'https://api-rezsi.herokuapp.com/api/v1';

export default new ApiConnector(baseUrl);
