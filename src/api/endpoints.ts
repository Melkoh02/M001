// src/api/endpoints.ts
import client, {wrapRequest} from './client';

/**
 * GET /test/
 */
export const getTest = () => {
  return wrapRequest(client.get<{test: string}>('/test/test'));
};

/**
 * GET /test/:id/?otherParam=…
 */
export const getTestById = (data: {id: number; [key: string]: any}) => {
  const {id, ...params} = data;
  return wrapRequest(client.get(`/test/${id}/`, {params}));
};

/**
 * POST /test/  body: { … }
 */
export const postTest = (data: {[key: string]: any}) => {
  return wrapRequest(client.post('/test/', data));
};

/**
 * PUT /test/:id/  body: { … }
 */
export const putTest = (data: {id: number; [key: string]: any}) => {
  const {id, ...body} = data;
  return wrapRequest(client.put(`/test/${id}/`, body));
};

/**
 * PATCH /test/:id/  body: { … }
 */
export const patchTest = (data: {id: number; [key: string]: any}) => {
  const {id, ...body} = data;
  return wrapRequest(client.patch(`/test/${id}/`, body));
};

/**
 * DELETE /test/:id/?hard=true
 */
export const deleteTest = (data: {id: number; [key: string]: any}) => {
  const {id, ...params} = data;
  return wrapRequest(client.delete(`/test/${id}/`, {params}));
};

/**
 * GET /tests/?page=…&pageSize=…
 */
export const listTests = (params: {[key: string]: any}) => {
  return wrapRequest(client.get('/tests/', {params}));
};

/**
 * POST /test/  body: { … }
 */
export const login = (data: {[key: string]: any}) => {
  return wrapRequest(client.post('/authenticate/', data));
};
