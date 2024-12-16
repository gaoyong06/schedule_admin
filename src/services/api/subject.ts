// /chedule_admin/src/services/api/subject.ts
// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建科目 用于创建新的科目 POST /api/v1/subjects */
export async function createSubject(body: API.CreateSubjectReq, options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.Subject }>('/api/v1/subjects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取科目 用于获取单个科目 GET /api/v1/subjects/${param0} */
export async function getSubject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubjectParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.Subject }>(`/api/v1/subjects/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除科目 用于删除现有的科目 DELETE /api/v1/subjects/${param0} */
export async function deleteSubject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSubjectParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/api/v1/subjects/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新科目 用于更新现有的科目 PUT /api/v1/subjects/${param1} */
export async function updateSubject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateSubjectParams,
  body: API.UpdateSubjectReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.Subject }>(`/api/v1/subjects/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 批量创建科目 POST /api/v1/subjects/batch */
export async function postApiV1SubjectsBatch(
  body: API.BatchCreateSubjectReq,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.Subject[] }>('/api/v1/subjects/batch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量删除科目 用于批量删除现有的科目 DELETE /api/v1/subjects/batch */
export async function batchDeleteSubjects(body: number[], options?: { [key: string]: any }) {
  return request<API.Response>('/api/v1/subjects/batch', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取组织的科目列表 用于获取组织的科目列表 GET /api/v1/subjects/org/${param0} */
export async function getSubjectsByOrg(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubjectsByOrgParams,
  options?: { [key: string]: any },
) {
  const { org_id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.PageList & { list?: API.Subject[] } }>(
    `/api/v1/subjects/org/${param0}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}
