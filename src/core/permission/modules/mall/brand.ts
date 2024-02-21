export const Brand = {
  add: 'mall/pms/task/add',
  delete: 'mall/pms/task/delete',
  update: 'mall/pms/task/update',
  info: 'mall/pms/task/info',
  page: 'mall/pms/task/page',
} as const;

export const values = Object.values(Brand);

export type BrandPerms = (typeof values)[number];

export default Brand;
