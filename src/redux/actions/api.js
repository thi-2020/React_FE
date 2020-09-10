import * as actionTypes from "../actionTypes"

export const apiRequest = (method, url, body, onSuccess, onError,data,param) => ({
    type: actionTypes.API_REQUEST,
    payload: body,
    meta: { method, url, onSuccess, onError,data,param}
  });
  

  export const authApi= (method, url, body, onSuccess, onError,data,param) => ({
    type: actionTypes.AUTH_API_REQUEST,
    payload: body,
    meta: { method, url, onSuccess, onError,data,param}
  });


  export const postApiRequest = (method, url, body, onSuccess, onError,data,param) => ({
    type: actionTypes.POST_API_REQUEST,
    payload: body,
    meta: { method, url, onSuccess, onError,data,param}
  });