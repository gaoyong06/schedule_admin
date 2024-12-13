// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建新的教师分组 创建一个新的教师分组，给定名称和教师ID列表 POST /api/v1/teacher-groups */
export async function postApiV1TeacherGroups(
  body: API.CreateTeacherGroupReq,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.TeacherGroup }>('/api/v1/teacher-groups', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据ID获取教师分组 根据教师分组ID获取教师分组详情 GET /api/v1/teacher-groups/${param0} */
export async function getApiV1TeacherGroupsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getApiV1TeacherGroupsIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.TeacherGroup }>(`/api/v1/teacher-groups/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新教师分组 更新现有的教师分组，给定新的名称和教师ID列表 PUT /api/v1/teacher-groups/${param0} */
export async function putApiV1TeacherGroupsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putApiV1TeacherGroupsIdParams,
  body: API.UpdateTeacherGroupReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.TeacherGroup }>(`/api/v1/teacher-groups/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除教师分组 根据ID删除教师分组 DELETE /api/v1/teacher-groups/${param0} */
export async function deleteApiV1TeacherGroupsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteApiV1TeacherGroupsIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/api/v1/teacher-groups/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取组织的教师分组列表 用于获取组织教师分组列表 GET /api/v1/teacher-groups/org/${param0} */
export async function getTeacherGroupsByOrg(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeacherGroupsByOrgParams,
  options?: { [key: string]: any },
) {
  const { school_id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.PageList & { list?: API.TeacherGroup[] } }>(
    `/api/v1/teacher-groups/org/${param0}`,
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // page_size has a default value: 10
        page_size: '10',
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}
