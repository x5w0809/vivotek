import { VivotekApi } from '@/api'
import LoginRequestModel from '@/models/api/account/LoginRequestModel'
import LoginResponseModel from '@/models/api/account/LoginResponseModel'
import { UseFetchOptions } from 'nuxt/app';
import httpRequest from "~/service";


/**
 * 登入
 * @returns
 */

const loginURL = "/api/auth/login";
const loginToken = (params: any) => {
    return httpRequest.post(loginURL, params);
  };

/**
 * 員工資料
 * @returns
 */

const profileURL = "/api/my/profile";
const getPersonalInfo = (params: any, options?:any) => {
  return httpRequest.get(profileURL, params,options);
};

/**
 * 員工資料更新
 * @returns
 */

const putPersonalInfo = (params: any, options?:any) => {
  return httpRequest.Put(profileURL, params, options);
};

export { putPersonalInfo, getPersonalInfo, loginToken };