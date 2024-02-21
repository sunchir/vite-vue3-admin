import { request } from '@/utils/request';
import Api from '@/core/permission/modules/mall/brand';

export function getBrandList(query: API.PageParams) {
  return request(
    {
      url: Api.page,
      method: 'get',
      params: query,
    },
    {
      isNotBase: true,
    },
  );
}

export function getBrandInfo(query: { brandId: number }) {
  return request<API.BaseEntityItem>(
    {
      url: Api.info,
      method: 'get',
      params: query,
    },
    {
      isNotBase: true,
    },
  );
}

export function createBrand(data: API.BaseEntityItem) {
  return request(
    {
      url: Api.add,
      method: 'post',
      data,
    },
    {
      successMsg: '创建成功',
      isNotBase: true,
    },
  );
}

export function updateBrand(data: API.BaseEntityItem) {
  return request(
    {
      url: Api.update,
      method: 'post',
      data,
    },
    {
      successMsg: '更新成功',
      isNotBase: true,
    },
  );
}

export function deleteBrand(data: { brandId: number }) {
  return request(
    {
      url: Api.delete,
      method: 'post',
      data,
    },
    {
      successMsg: '删除成功',
      isNotBase: true,
    },
  );
}
