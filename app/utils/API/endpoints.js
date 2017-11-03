export const makeAuth = (get) =>
  () => get('/auth');

export const makeLogin = (post) =>
  (payload) => post('/auth/token', payload);

export const makeSignUp = (post) =>
  (payload) => post('/users', payload);

export const makeGetGroups = (get) =>
  () => get('/groups');

export const makeGetGroup = (get) =>
  (id) => get(`/groups/${id}`);

export const makeCreateGroup = (post) =>
  (payload) => post('/groups', payload);

export const makeGetGroupMember = (get) =>
  ({ groupId, userId }) => get(`/groups/${groupId}/users/${userId}`);

export const makePostReport = (post) =>
  (payload) => post('/user/reports', payload);
