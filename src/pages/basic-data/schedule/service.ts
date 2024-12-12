import { request } from '@umijs/max';
import type { ScheduleDisplayItem, ScheduleItemDataType } from './data.d';

// 将API返回的数据转换为前端展示所需的格式
function convertToListItem(schedule: ScheduleItemDataType): ScheduleDisplayItem {
  return {
    ...schedule,
    title: schedule.name,
    subDescription: schedule.description || '',
  };
}

type ParamsType = {
  count?: number;
} & Partial<ScheduleItemDataType>;

export async function queryScheduleList(
  params: ParamsType,
): Promise<{ data: { list: ScheduleDisplayItem[] } }> {
  const response = await request<{ data: { list: ScheduleItemDataType[] } }>('/api/v1/schedules', {
    method: 'GET',
    params,
  });

  return {
    data: {
      list: response.data.list.map(convertToListItem),
    },
  };
}

export async function removeSchedule(
  id: string,
): Promise<{ data: { list: ScheduleDisplayItem[] } }> {
  const response = await request<{ data: { list: ScheduleItemDataType[] } }>(
    `/api/v1/schedules/${id}`,
    {
      method: 'DELETE',
    },
  );

  return {
    data: {
      list: response.data.list.map(convertToListItem),
    },
  };
}

export async function addSchedule(
  params: ParamsType,
): Promise<{ data: { list: ScheduleDisplayItem[] } }> {
  const scheduleData = {
    name: params.title,
    description: params.subDescription,
    status: 'active',
  };

  const response = await request<{ data: { list: ScheduleItemDataType[] } }>('/api/v1/schedules', {
    method: 'POST',
    data: scheduleData,
  });

  return {
    data: {
      list: response.data.list.map(convertToListItem),
    },
  };
}

export async function updateSchedule(
  id: string,
  params: ParamsType,
): Promise<{ data: { list: ScheduleDisplayItem[] } }> {
  const scheduleData = {
    name: params.title,
    description: params.subDescription,
    status: params.status,
  };

  const response = await request<{ data: { list: ScheduleItemDataType[] } }>(
    `/api/v1/schedules/${id}`,
    {
      method: 'PUT',
      data: scheduleData,
    },
  );

  return {
    data: {
      list: response.data.list.map(convertToListItem),
    },
  };
}
