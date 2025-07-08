import client, {wrapRequest} from './client';

export const login = (data: {[key: string]: any}) => {
  return wrapRequest(client.post('/authenticate/', data));
};

export const signUp = (data: {[key: string]: any}) => {
  return wrapRequest(client.post('/users/', data));
};
