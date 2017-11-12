import request from 'utils/request';
import merge from 'utils/merge';
import TokenStorage from 'utils/TokenStorage';

import {
  makeGetUrl,
  makeGetOptions,
  makeCall,
  makeGet,
  makePost,
  makePatch,
  makeDelete,
} from './core';

import {
  makeGetAuth,
  makePostAuth,
  makePostUser,
  makeGetReports,
  makePostReport,
  makeGetBills,
  makeGetGroups,
  makePostGroup,
  makeGetGroup,
  makePatchGroup,
  makeDeleteGroup,
  makeGetUsers,
  makeGetSummaries,
  makePostSummary,
  makeGetUser,
  makeDeleteUser,
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
const patch = makePatch({ merge, call });
const deleteMethod = makeDelete({ merge, call });

const ApiConnector = {
  auth: makeGetAuth(get),
  login: makePostAuth(post),
  signUp: makePostUser(post),
  groups: {
    get: makeGetGroups(get),
    post: makePostGroup(post),
  },
  group: {
    get: makeGetGroup(get),
    patch: makePatchGroup(patch),
    delete: makeDeleteGroup(deleteMethod),
    users: {
      get: makeGetUsers(get),
    },
    summaries: {
      get: makeGetSummaries(get),
      post: makePostSummary(post),
    },
    user: {
      get: makeGetUser(get),
      delete: makeDeleteUser(deleteMethod),
      reports: {
        get: makeGetReports(get),
        post: makePostReport(post),
      },
      bills: {
        get: makeGetBills(get),
      },
    },
  },
};

export default ApiConnector;
