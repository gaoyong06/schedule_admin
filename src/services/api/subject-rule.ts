// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取科目规则列表 根据条件获取科目规则列表 GET /subject-rules */
export async function getSubjectRules(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubjectRulesParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.PageList & { list?: API.SubjectRule[] } }>(
    '/subject-rules',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 创建科目规则 创建一个新的科目规则，包括固排、禁排等 POST /subject-rules */
export async function postSubjectRules(
  body: API.CreateSubjectRuleReq,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.SubjectRule }>('/subject-rules', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取科目规则详情 根据规则ID获取科目规则的详细信息 GET /subject-rules/${param0} */
export async function getSubjectRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubjectRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.SubjectRule }>(`/subject-rules/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新科目规则 更新现有的科目规则信息 PUT /subject-rules/${param0} */
export async function putSubjectRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putSubjectRulesIdParams,
  body: API.UpdateSubjectRuleReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.SubjectRule }>(`/subject-rules/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除科目规则 根据ID删除科目规则（软删除） DELETE /subject-rules/${param0} */
export async function deleteSubjectRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSubjectRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/subject-rules/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
