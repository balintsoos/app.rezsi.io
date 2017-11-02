import request from 'utils/request';
import { exist as tokenExist, get as getToken } from 'utils/token';
import merge from 'utils/merge';

export class ApiConnector {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
    this.default = {
      credentials: 'include',
      headers: {
        Accept: 'application/json',
      },
    };
  }

  options = () => {
    if (!tokenExist()) {
      return this.default;
    }

    return merge({}, this.default, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  }

  call = (endpoint, options) => request(
    `${this.baseUrl}${endpoint}`,
    merge({}, this.options(), options)
  )

  get = (endpoint, options = {}) => this.call(
    endpoint,
    merge({}, options, { method: 'GET' })
  )

  post = (endpoint, options) => this.call(
    endpoint,
    merge({}, options, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
  )

  auth = () => this.get('/auth')

  login = (payload) => this.post('/auth/token', {
    body: JSON.stringify(payload),
  })

  signUp = (payload) => this.post('/users', {
    body: JSON.stringify(payload),
  })

  getGroups = () => this.get('/groups')

  getGroup = (id) => this.get(`/groups/${id}`)

  createGroup = (payload) => this.post('/groups', {
    body: JSON.stringify(payload),
  })

  getGroupMember = ({ groupId, userId }) => this.get(`/groups/${groupId}/users/${userId}`)

  getUser = () => this.get('/user')
}

const baseUrl = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:4040/api/v1'
  : 'https://api-rezsi.herokuapp.com/api/v1';

export default new ApiConnector(baseUrl);
