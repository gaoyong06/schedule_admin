// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建年级 创建一个新的年级 POST /api/v1/grades */
export async function createGrade(body: API.CreateGradeReq, options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.Grade }>('/api/v1/grades', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取年级信息 根据年级ID获取年级信息 GET /api/v1/grades/${param0} */
export async function getGrade(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGradeParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.Grade }>(`/api/v1/grades/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新年级信息 更新指定的年级信息 PUT /api/v1/grades/${param0} */
export async function updateGrade(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateGradeParams,
  body: API.UpdateGradeReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.Grade }>(`/api/v1/grades/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除年级 删除指定的年级 DELETE /api/v1/grades/${param0} */
export async function deleteGrade(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteGradeParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/api/v1/grades/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 批量删除年级 用于批量删除现有的年级 DELETE /api/v1/grades/batch */
export async function batchDeleteGrades(
  body: API.BatchDeleteGradesReq,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/api/v1/grades/batch', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取组织的年级列表 获取组织的年级列表 GET /api/v1/grades/org/${param0} */
export async function getGradesByOrg(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGradesByUserParams,
  options?: { [key: string]: any },
) {
  const { org_id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.PageList & { list?: API.Grade[] } }>(
    `/api/v1/grades/org/${param0}`,
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        current: '1',
        // page_size has a default value: 10
        page_size: '10',
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}
