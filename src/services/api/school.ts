// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建学校 创建一个新的学校 POST /api/v1/schools */
export async function createSchool(body: API.CreateSchoolReq, options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.School }>('/api/v1/schools', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取组织信息 根据学校ID获取组织信息 GET /api/v1/schools/${param0} */
export async function getSchool(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSchoolParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.School }>(`/api/v1/schools/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新学校信息 更新指定的学校信息 PUT /api/v1/schools/${param0} */
export async function updateSchool(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateSchoolParams,
  body: API.UpdateSchoolReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.School }>(`/api/v1/schools/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除学校 删除指定的学校 DELETE /api/v1/schools/${param0} */
export async function deleteSchool(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSchoolParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/api/v1/schools/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取用户的学校列表 获取用户创建的学校列表 GET /api/v1/schools/user/${param0} */
export async function getSchoolsByUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSchoolsByUserParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.PageList & { list?: API.School[] } }>(
    `/api/v1/schools/user/${param0}`,
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
