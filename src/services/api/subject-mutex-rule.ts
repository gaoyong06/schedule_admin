// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取科目互斥规则列表 根据条件获取科目互斥规则列表 GET /subject-mutex-rules */
export async function getSubjectMutexRules(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubjectMutexRulesParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.PageList & { list?: API.SubjectMutexRule[] } }>(
    '/subject-mutex-rules',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 创建科目互斥规则 创建一个新的科目互斥规则 POST /subject-mutex-rules */
export async function postSubjectMutexRules(
  body: API.CreateSubjectMutexRuleReq,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.SubjectMutexRule }>('/subject-mutex-rules', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取科目互斥规则详情 根据规则ID获取科目互斥规则的详细信息 GET /subject-mutex-rules/${param0} */
export async function getSubjectMutexRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubjectMutexRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.SubjectMutexRule }>(`/subject-mutex-rules/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新科目互斥规则 更新现有的科目互斥规则信息 PUT /subject-mutex-rules/${param0} */
export async function putSubjectMutexRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putSubjectMutexRulesIdParams,
  body: API.UpdateSubjectMutexRuleReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.SubjectMutexRule }>(`/subject-mutex-rules/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除科目互斥规则 根据ID删除科目互斥规则（软删除） DELETE /subject-mutex-rules/${param0} */
export async function deleteSubjectMutexRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSubjectMutexRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/subject-mutex-rules/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
