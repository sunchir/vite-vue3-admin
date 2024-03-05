export const Brand = {
  add: 'mall/pms/brand/add',
  delete: 'mall/pms/brand/delete',
  update: 'mall/pms/brand/update',
  info: 'mall/pms/brand/info',
  page: 'mall/pms/brand/page',
} as const;

export const values = Object.values(Brand);

export type BrandPerms = (typeof values)[number];

export default Brand;
