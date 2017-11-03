export const makeGetAuth = (get) =>
  () => get('/auth');

export const makePostAuth = (post) =>
  (payload) => post('/auth', payload);

export const makePostUser = (post) =>
  (payload) => post('/users', payload);

export const makeGetGroups = (get) =>
  () => get('/groups');

export const makeGetGroup = (get) =>
  (id) => get(`/groups/${id}`);

export const makePostGroup = (post) =>
  (payload) => post('/groups', payload);

export const makeGetGroupMember = (get) =>
  ({ groupId, userId }) => get(`/groups/${groupId}/users/${userId}`);

export const makeGetReports = (get) =>
  () => get('/reports');

export const makePostReport = (post) =>
  (payload) => post('/reports', payload);
