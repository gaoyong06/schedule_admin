// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 批量创建年级和班级 批量创建年级和班级信息 POST /api/classes/batch-create-grades-and-classes */
export async function postApiClassesBatchCreateGradesAndClasses(
  body: API.GradeWithClassCountRequest[],
  options?: { [key: string]: any },
) {
  return request<API.Response>('/api/classes/batch-create-grades-and-classes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建班级 创建一个新的班级 POST /api/v1/classes */
export async function createClass(body: API.CreateClassReq, options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.Class }>('/api/v1/classes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量创建班级 创建一个新的班级 POST /api/v1/classes/batch */
export async function batchCreateClass(
  body: API.BatchCreateClassReq,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/api/v1/classes/batch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取班级信息 根据班级ID获取班级信息 GET /api/v1/classes/${param0} */
export async function getClass(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getClassParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.Class }>(`/api/v1/classes/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新班级信息 更新指定的班级信息 PUT /api/v1/classes/${param0} */
export async function updateClass(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateClassParams,
  body: API.UpdateClassReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.Class }>(`/api/v1/classes/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除班级 删除指定的班级 DELETE /api/v1/classes/${param0} */
export async function deleteClass(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteClassParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/api/v1/classes/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 批量删除年级 用于批量删除现有的年级 DELETE /api/v1/grades/batch */
export async function batchDeleteClasses(
  body: API.BatchDeleteClassesReq,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/api/v1/classes/batch', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取年级的班级列表 获取年级的班级列表 GET /api/v1/classes/grade/${param0} */
export async function getClassesByGrade(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getClassesByGradeParams,
  options?: { [key: string]: any },
) {
  const { grade_id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.PageList & { list?: API.Class[] } }>(
    `/api/v1/classes/grade/${param0}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}

/** 获取组织的年级列表 获取组织的年级列表 GET /api/v1/classes/org/${param0} */
export async function getClassesByOrg(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getClassesByOrgParams,
  options?: { [key: string]: any },
) {
  const { org_id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.PageList & { list?: API.Class[] } }>(
    `/api/v1/classes/org/${param0}`,
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
