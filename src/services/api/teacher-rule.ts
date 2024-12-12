// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取教师规则列表 获取教师规则列表，支持分页和过滤 GET /teacher-rules */
export async function getTeacherRules(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeacherRulesParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.PageList }>('/teacher-rules', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建教师规则 创建新的教师规则 POST /teacher-rules */
export async function postTeacherRules(
  body: API.CreateTeacherRuleReq,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/teacher-rules', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教师规则详情 根据ID获取教师规则详情 GET /teacher-rules/${param0} */
export async function getTeacherRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeacherRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.TeacherRule }>(`/teacher-rules/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新教师规则 根据ID更新教师规则 PUT /teacher-rules/${param0} */
export async function putTeacherRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putTeacherRulesIdParams,
  body: API.UpdateTeacherRuleReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/teacher-rules/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除教师规则 根据ID删除教师规则 DELETE /teacher-rules/${param0} */
export async function deleteTeacherRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTeacherRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/teacher-rules/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
