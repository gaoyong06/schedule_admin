// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取科目连堂规则列表 获取科目连堂规则列表，支持分页和过滤 GET /subject-connected-day-rules */
export async function getSubjectConnectedDayRules(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubjectConnectedDayRulesParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.PageList }>('/subject-connected-day-rules', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建科目连堂规则 创建新的科目连堂规则 POST /subject-connected-day-rules */
export async function postSubjectConnectedDayRules(
  body: API.CreateSubjectConnectedDayRuleReq,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/subject-connected-day-rules', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取科目连堂规则详情 根据ID获取科目连堂规则详情 GET /subject-connected-day-rules/${param0} */
export async function getSubjectConnectedDayRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubjectConnectedDayRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.SubjectConnectedDayRule }>(
    `/subject-connected-day-rules/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 更新科目连堂规则 根据ID更新科目连堂规则 PUT /subject-connected-day-rules/${param0} */
export async function putSubjectConnectedDayRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putSubjectConnectedDayRulesIdParams,
  body: API.UpdateSubjectConnectedDayRuleReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/subject-connected-day-rules/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除科目连堂规则 根据ID删除科目连堂规则 DELETE /subject-connected-day-rules/${param0} */
export async function deleteSubjectConnectedDayRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSubjectConnectedDayRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/subject-connected-day-rules/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
