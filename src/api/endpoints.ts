import client from './client';

/**
 * GET /test/?id=...
 */
export const getTest = (data: {id?: number; [key: string]: any}) => {
  const {id, ...params} = data;
  return client.get<string>('/test/', {data});
};

/**
 * GET /test/:id/?otherParam=...
 */
export const getTestById = (data: {id: number; [key: string]: any}) => {
  const {id, ...params} = data;
  return client.get<string>(`/test/${id}/`, {params});
};

/**
 * POST /test/  body: { … }
 */
export const postTest = (data: {[key: string]: any}) => {
  return client.post<string>('/test/', data);
};

/**
 * PUT /test/:id/  body: { … }
 */
export const putTest = (data: {id: number; [key: string]: any}) => {
  const {id, ...body} = data;
  return client.put<string>(`/test/${id}/`, body);
};

/**
 * PATCH /test/:id/  body: { … }
 */
export const patchTest = (data: {id: number; [key: string]: any}) => {
  const {id, ...body} = data;
  return client.patch<string>(`/test/${id}/`, body);
};

/**
 * DELETE /test/:id/?hard=true
 */
export const deleteTest = (data: {id: number; [key: string]: any}) => {
  const {id, ...params} = data;
  return client.delete<string>(`/test/${id}/`, {params});
};

/**
 * GET /tests/?page=…&pageSize=…
 */
export const listTests = (params: {[key: string]: any}) => {
  return client.get<string>('/tests/', {params});
};
