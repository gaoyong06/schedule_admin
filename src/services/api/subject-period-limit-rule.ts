// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取科目节次限制规则列表 获取科目节次限制规则列表，支持分页和过滤 GET /subject-period-limit-rules */
export async function getSubjectPeriodLimitRules(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubjectPeriodLimitRulesParams,
  options?: { [key: string]: any },
) {
  return request<API.SubjectPeriodLimitRule[]>('/subject-period-limit-rules', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建科目节次限制规则 创建新的科目节次限制规则 POST /subject-period-limit-rules */
export async function postSubjectPeriodLimitRules(
  body: API.CreateSubjectPeriodLimitRuleReq,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/subject-period-limit-rules', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取科目节次限制规则详情 根据ID获取科目节次限制规则详情 GET /subject-period-limit-rules/${param0} */
export async function getSubjectPeriodLimitRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubjectPeriodLimitRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.SubjectPeriodLimitRule>(`/subject-period-limit-rules/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新科目节次限制规则 根据ID更新科目节次限制规则 PUT /subject-period-limit-rules/${param0} */
export async function putSubjectPeriodLimitRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putSubjectPeriodLimitRulesIdParams,
  body: API.UpdateSubjectPeriodLimitRuleReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/subject-period-limit-rules/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除科目节次限制规则 根据ID删除科目节次限制规则 DELETE /subject-period-limit-rules/${param0} */
export async function deleteSubjectPeriodLimitRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSubjectPeriodLimitRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/subject-period-limit-rules/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
