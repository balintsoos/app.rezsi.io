import request from 'utils/request';
import merge from 'utils/merge';
import TokenStorage from 'utils/TokenStorage';

import {
  makeGetUrl,
  makeGetOptions,
  makeCall,
  makeGet,
  makePost,
} from './core';

import {
  makeAuth,
  makeLogin,
  makeSignUp,
  makeGetGroups,
  makeGetGroup,
  makeCreateGroup,
  makeGetGroupMember,
  makePostReport,
} from './endpoints';

const baseUrl = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:4040/api/v1'
  : 'https://api-rezsi.herokuapp.com/api/v1';

const defaults = {
  credentials: 'include',
  headers: {
    Accept: 'application/json',
  },
};

const getUrl = makeGetUrl(baseUrl);
const getOptions = makeGetOptions({ merge, defaults, TokenStorage });
const call = makeCall({ request, getUrl, getOptions });
const get = makeGet({ merge, call });
const post = makePost({ merge, call });

const ApiConnector = {
  auth: makeAuth(get),
  login: makeLogin(post),
  signUp: makeSignUp(post),
  groups: {
    get: makeGetGroups(get),
  },
  group: {
    get: makeGetGroup(get),
    post: makeCreateGroup(post),
    member: {
      get: makeGetGroupMember(get),
    },
  },
  report: {
    post: makePostReport(post),
  },
};

export default ApiConnector;
