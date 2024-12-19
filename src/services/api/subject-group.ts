// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建新的科目分组 创建一个新的科目分组，给定名称和科目ID列表 POST /api/v1/subject-groups */
export async function postApiV1SubjectGroups(
  body: API.CreateSubjectGroupReq,
  options?: { [key: string]: any },
) {
  return request<API.SubjectGroup>('/api/v1/subject-groups', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据ID获取科目分组 根据科目分组ID获取科目分组详情 GET /api/v1/subject-groups/${param0} */
export async function getApiV1SubjectGroupsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getApiV1SubjectGroupsIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.SubjectGroup>(`/api/v1/subject-groups/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新科目分组 更新现有的科目分组，给定新的名称和科目ID列表 PUT /api/v1/subject-groups/${param0} */
export async function putApiV1SubjectGroupsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putApiV1SubjectGroupsIdParams,
  body: API.UpdateSubjectGroupReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/subject-groups/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除科目分组 根据ID删除科目分组 DELETE /api/v1/subject-groups/${param0} */
export async function deleteApiV1SubjectGroupsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteApiV1SubjectGroupsIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/subject-groups/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取组织的科目分组列表 用于获取组织科目分组列表 GET /api/v1/subject-groups/org/${param0} */
export async function getSubjectGroupsByOrg(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubjectGroupsByOrgParams,
  options?: { [key: string]: any },
) {
  const { org_id: param0, ...queryParams } = params;
  return request<API.H>(`/api/v1/subject-groups/org/${param0}`, {
    method: 'GET',
    params: {
      // page has a default value: 1
      current: '1',
      // page_size has a default value: 10
      page_size: '10',
      ...queryParams,
    },
    ...(options || {}),
  });
}
