// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建课表方案 用于创建新的课表方案 POST /api/v1/schedules */
export async function createSchedule(
  body: API.CreateScheduleRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.Schedule }>('/api/v1/schedules', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取课表方案 用于获取单个课表方案 GET /api/v1/schedules/${param0} */
export async function getSchedule(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getScheduleParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.Schedule }>(`/api/v1/schedules/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新课表方案 用于更新现有的课表方案 PUT /api/v1/schedules/${param0} */
export async function updateSchedule(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateScheduleParams,
  body: API.UpdateScheduleReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.Schedule }>(`/api/v1/schedules/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除课表方案 用于删除现有的课表方案 DELETE /api/v1/schedules/${param0} */
export async function deleteSchedule(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteScheduleParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/api/v1/schedules/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取组织的课表方案列表 用于获取组织的课表方案列表 GET /api/v1/schedules/org/${param0} */
export async function getSchedulesByOrg(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSchedulesByOrgParams,
  options?: { [key: string]: any },
) {
  const { org_id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.PageList & { list?: API.Schedule[] } }>(
    `/api/v1/schedules/org/${param0}`,
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

/** 获取用户的课表方案列表 用于获取用户创建的课表方案列表 GET /api/v1/schedules/user/${param0} */
export async function getSchedulesByUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSchedulesByUserParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.PageList & { list?: API.Schedule[] } }>(
    `/api/v1/schedules/user/${param0}`,
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
