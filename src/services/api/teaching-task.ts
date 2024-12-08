// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建教学任务 创建一个新的教学任务 POST /teaching-tasks */
export async function postTeachingTasks(
  body: API.CreateTeachingTaskReq,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.TeachingTask }>('/teaching-tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据ID获取教学任务 根据ID获取特定的教学任务 GET /teaching-tasks/${param0} */
export async function getTeachingTasksId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeachingTasksIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.TeachingTask }>(`/teaching-tasks/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新教学任务 更新特定的教学任务 PUT /teaching-tasks/${param0} */
export async function putTeachingTasksId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putTeachingTasksIdParams,
  body: API.UpdateTeachingTaskReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.TeachingTask }>(`/teaching-tasks/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除教学任务 根据ID删除特定的教学任务 DELETE /teaching-tasks/${param0} */
export async function deleteTeachingTasksId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTeachingTasksIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/teaching-tasks/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 批量创建教学任务 批量创建多个教学任务 POST /teaching-tasks/batch */
export async function postTeachingTasksBatch(
  body: API.CreateTeachingTaskReq[],
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.TeachingTask[] }>('/teaching-tasks/batch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
