// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取排课任务列表 获取排课任务列表，支持分页和过滤 GET /tasks */
export async function getTasks(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTasksParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.PageList }>('/tasks', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建排课任务 创建新的排课任务 POST /tasks */
export async function postTasks(body: API.CreateTaskReq, options?: { [key: string]: any }) {
  return request<API.Response>('/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取排课任务详情 根据ID获取排课任务详情 GET /tasks/${param0} */
export async function getTasksId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTasksIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.Task }>(`/tasks/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新排课任务 根据ID更新排课任务 PUT /tasks/${param0} */
export async function putTasksId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putTasksIdParams,
  body: API.UpdateTaskReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/tasks/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除排课任务 根据ID删除排课任务 DELETE /tasks/${param0} */
export async function deleteTasksId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTasksIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/tasks/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新排课任务进度 更新排课任务的进度 PUT /tasks/${param0}/progress */
export async function putTasksIdProgress(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putTasksIdProgressParams,
  body: API.UpdateTaskProgressReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/tasks/${param0}/progress`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 更新排课任务状态 更新排课任务的状态 PUT /tasks/${param0}/status */
export async function putTasksIdStatus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putTasksIdStatusParams,
  body: API.UpdateTaskStatusReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/tasks/${param0}/status`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
