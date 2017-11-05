import request from 'utils/request';
import merge from 'utils/merge';
import TokenStorage from 'utils/TokenStorage';

import {
  makeGetUrl,
  makeGetOptions,
  makeCall,
  makeGet,
  makePost,
  makeDelete,
} from './core';

import {
  makeGetAuth,
  makePostAuth,
  makePostUser,
  makeGetGroups,
  makeGetGroup,
  makePostGroup,
  makeGetGroupMember,
  makeDeleteGroupMember,
  makeGetReports,
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
const deleteMethod = makeDelete({ merge, call });

const ApiConnector = {
  auth: makeGetAuth(get),
  login: makePostAuth(post),
  signUp: makePostUser(post),
  groups: {
    get: makeGetGroups(get),
    post: makePostGroup(post),
    group: {
      get: makeGetGroup(get),
      member: {
        get: makeGetGroupMember(get),
        delete: makeDeleteGroupMember(deleteMethod),
      },
    },
  },
  reports: {
    get: makeGetReports(get),
    post: makePostReport(post),
  },
};

export default ApiConnector;
