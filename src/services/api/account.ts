// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取手机验证码 获取手机验证码 POST /api/v1/users/captcha */
export async function postApiV1UsersCaptcha(
  body: API.GetCaptchaReq,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/api/v1/users/captcha', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户信息 获取当前登录用户的信息 GET /api/v1/users/info */
export async function getUserInfo(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.UserInfoResponse }>('/api/v1/users/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户登录 用户登录端点 POST /api/v1/users/login */
export async function postApiV1UsersLogin(
  body: API.UserCredentials,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/api/v1/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户退出登录 用户退出登录端点 POST /api/v1/users/logout */
export async function postApiV1UsersLogout(options?: { [key: string]: any }) {
  return request<API.Response>('/api/v1/users/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 注册用户 用于注册新用户 POST /api/v1/users/register */
export async function registerUser(body: API.RegisterUserReq, options?: { [key: string]: any }) {
  return request<API.Response>('/api/v1/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
