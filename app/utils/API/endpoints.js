export const makeGetAuth = (get) =>
  () => get('/auth');

export const makePostAuth = (post) =>
  (payload) => post('/auth', payload);

export const makePostUser = (post) =>
  (payload) => post('/users', payload);

export const makeGetGroups = (get) =>
  () => get('/groups');

export const makePostGroup = (post) =>
  (payload) => post('/groups', payload);

export const makeGetGroup = (get) =>
  (id) => get(`/groups/${id}`);

export const makePatchGroup = (patch) =>
  ({ id, payload }) => patch(`/groups/${id}`, payload);

export const makeDeleteGroup = (deleteMethod) =>
  (id) => deleteMethod(`/groups/${id}`);

export const makeGetUsers = (get) =>
  (id) => get(`/groups/${id}/users`);

export const makeGetSummaries = (get) =>
  (id) => get(`/groups/${id}/summaries`);

export const makePostSummary = (post) =>
  ({ id, payload }) => post(`/groups/${id}/summaries`, payload);

export const makeGetUser = (get) =>
  ({ groupId, userId }) => get(`/groups/${groupId}/users/${userId}`);

export const makeDeleteUser = (deleteMethod) =>
  ({ groupId, userId }) => deleteMethod(`/groups/${groupId}/users/${userId}`);

export const makeGetReports = (get) =>
  ({ groupId, userId }) => get(`/groups/${groupId}/users/${userId}/reports`);

export const makePostReport = (post) =>
  ({ groupId, userId, payload }) => post(`/groups/${groupId}/users/${userId}/reports`, payload);

export const makeGetBills = (get) =>
  ({ groupId, userId }) => get(`/groups/${groupId}/users/${userId}/bills`);
