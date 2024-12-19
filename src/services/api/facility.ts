// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建教学场地 创建一个新的教学场地 POST /api/v1/facilities */
export async function createFacility(
  body: API.CreateFacilityReq,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.Facility }>('/api/v1/facilities', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教学场地信息 根据教学场地ID获取教学场地信息 GET /api/v1/facilities/${param0} */
export async function getFacility(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFacilityParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.Facility }>(`/api/v1/facilities/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新教学场地信息 更新指定的教学场地信息 PUT /api/v1/facilities/${param0} */
export async function updateFacility(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateFacilityParams,
  body: API.UpdateFacilityReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.Facility }>(`/api/v1/facilities/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除教学场地 删除指定的教学场地 DELETE /api/v1/facilities/${param0} */
export async function deleteFacility(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFacilityParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/api/v1/facilities/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取组织的教学场地列表 获取组织的教学场地列表 GET /api/v1/facilities/school/${param1} */
export async function getFacilitiesByOrg(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFacilitiesByOrgParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, org_id: param1, ...queryParams } = params;
  return request<API.Response & { data?: API.PageList & { list?: API.Facility[] } }>(
    `/api/v1/facilities/school/${param1}`,
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

/** 为一个班级科目设置教学场地 设置一个班级科目的教学场地 POST /facilities/class */
export async function postFacilitiesOpenApiClass(
  body: API.SetFacilityReq,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/facilities/class', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 为一个班级科目取消设置教学场地 取消一个班级科目的教学场地设置 DELETE /facilities/class/${param0}/${param1}/${param2} */
export async function deleteFacilitiesOpenApiClassSubjectIdGradeIdClassId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFacilities_openAPI_classSubjectIdGradeIdClassIdParams,
  options?: { [key: string]: any },
) {
  const { subject_id: param0, grade_id: param1, class_id: param2, ...queryParams } = params;
  return request<API.Response>(`/facilities/class/${param0}/${param1}/${param2}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 为多个班级科目设置教学场地(批量) 批量设置多个班级科目的教学场地 POST /facilities/class/batch */
export async function postFacilitiesOpenApiClassBatch(
  body: API.SetFacilityReq[],
  options?: { [key: string]: any },
) {
  return request<API.Response>('/facilities/class/batch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
