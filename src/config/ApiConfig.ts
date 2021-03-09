import apisauce, { ApisauceInstance, CancelToken } from 'apisauce';
import { CANCEL } from 'redux-saga';

type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

export function apiConfig(baseURL: string): ApisauceInstance {
  return apisauce.create({
    baseURL,
    timeout: 120000,
    headers: { 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' }
  });
}

export function apiWithCancelToken(
  api: ApisauceInstance,
  method: Method,
  url: string,
  params?: {},
  data?: any,
  setting?: {}
) {
  const httpMethod = method.toLowerCase();

  const hasData = ['post', 'put', 'patch'].indexOf(httpMethod) >= 0;
  const source = CancelToken.source();
  const settings = setting || {};

  settings.cancelToken = source.token;

  const request = hasData ? api[httpMethod](url, data, settings) : api[httpMethod](url, params, settings);

  request[CANCEL] = () => source.cancel();

  return request;
}
