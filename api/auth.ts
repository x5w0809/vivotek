import { VivotekApi } from '@/api'
import LoginRequestModel from '@/models/api/account/LoginRequestModel'
import LoginResponseModel from '@/models/api/account/LoginResponseModel'
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
 * @description 分页查询员工数据
 * @return 员工信息
 */

const URL = "/staff";
const getStaffInfoByPage = (params: any) => {
  return httpRequest.get(URL, params);
};

/**
 * @description 修改员工数据
 * @param {any} data
 * @returns {any}
 */
const updateStaffInfo = (data: any) => {
  return httpRequest.post(URL, data);
};

export { getStaffInfoByPage, updateStaffInfo, loginToken };