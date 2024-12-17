// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建教师 用于创建新的教师 POST /api/v1/teachers */
export async function createTeacher(body: API.CreateTeacherReq, options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.Teacher }>('/api/v1/teachers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教师 用于获取单个教师 GET /api/v1/teachers/${param0} */
export async function getTeacher(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeacherParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.Teacher }>(`/api/v1/teachers/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除教师 用于删除现有的教师 DELETE /api/v1/teachers/${param0} */
export async function deleteTeacher(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTeacherParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/api/v1/teachers/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新教师 用于更新现有的教师 PUT /api/v1/teachers/${param1} */
export async function updateTeacher(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTeacherParams,
  body: API.UpdateTeacherReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.Teacher }>(`/api/v1/teachers/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 批量创建教师 POST /api/v1/teachers/batch */
export async function postApiV1TeachersBatch(
  body: API.BatchCreateTeacherReq,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.Teacher[] }>('/api/v1/teachers/batch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量删除教师 用于批量删除现有的教师 DELETE /api/v1/teachers/batch */
export async function batchDeleteTeachers(
  body: API.DeleteTeachersReq,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/api/v1/teachers/batch', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取组织的教师列表 用于获取组织的教师列表 GET /api/v1/teachers/org/${param0} */
export async function getTeachersByOrg(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeachersByOrgParams,
  options?: { [key: string]: any },
) {
  const { org_id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.PageList & { list?: API.Teacher[] } }>(
    `/api/v1/teachers/org/${param0}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}
