// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取科目每日限制规则列表 获取科目每日限制规则列表，支持分页和过滤 GET /subject-day-limit-rules */
export async function getSubjectDayLimitRules(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubjectDayLimitRulesParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.PageList }>('/subject-day-limit-rules', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建科目每日限制规则 创建新的科目每日限制规则 POST /subject-day-limit-rules */
export async function postSubjectDayLimitRules(
  body: API.CreateSubjectDayLimitRuleReq,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/subject-day-limit-rules', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取科目每日限制规则详情 根据ID获取科目每日限制规则详情 GET /subject-day-limit-rules/${param0} */
export async function getSubjectDayLimitRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubjectDayLimitRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.SubjectDayLimitRule }>(
    `/subject-day-limit-rules/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 更新科目每日限制规则 根据ID更新科目每日限制规则 PUT /subject-day-limit-rules/${param0} */
export async function putSubjectDayLimitRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putSubjectDayLimitRulesIdParams,
  body: API.UpdateSubjectDayLimitRuleReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/subject-day-limit-rules/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除科目每日限制规则 根据ID删除科目每日限制规则 DELETE /subject-day-limit-rules/${param0} */
export async function deleteSubjectDayLimitRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSubjectDayLimitRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/subject-day-limit-rules/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
