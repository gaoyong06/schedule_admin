// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取班级规则列表 根据条件获取班级规则列表 GET /class-rules */
export async function getClassRules(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getClassRulesParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.PageList & { list?: API.ClassRule[] } }>(
    '/class-rules',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 更新班级规则 更新现有的班级规则信息 PUT /class-rules */
export async function putClassRules(
  body: API.UpdateClassRuleReq,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.ClassRule }>('/class-rules', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建班级规则 创建一个新的班级规则，包括固排、禁排等 POST /class-rules */
export async function postClassRules(
  body: API.CreateClassRuleReq,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.ClassRule }>('/class-rules', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取班级规则详情 根据规则ID获取班级规则的详细信息 GET /class-rules/${param0} */
export async function getClassRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getClassRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.ClassRule }>(`/class-rules/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除班级规则 根据ID删除班级规则（软删除） DELETE /class-rules/${param0} */
export async function deleteClassRulesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteClassRulesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/class-rules/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
