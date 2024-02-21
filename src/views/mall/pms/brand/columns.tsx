// import { debounce } from 'lodash-es';
import type { TableColumn } from '@/components/core/dynamic-table';
import { waitTime } from '@/utils/common';

const names = ['王路飞', '王大蛇', '李白', '刺客伍六七'];

export const fetchStatusMapData = (keyword = '') => {
  const data = [
    {
      label: '已售罄',
      value: 0,
    },
    {
      label: '热卖中',
      value: 1,
    },
  ].filter((n) => n.label.includes(keyword));
  return waitTime<LabelValueOptions>(2000, data);
};

export const getClothesByGender = (gender: number) => {
  if (gender === 1) {
    // 男
    return [
      {
        label: '西装',
        value: 1,
      },
      {
        label: '领带',
        value: 0,
      },
    ];
  } else if (gender === 0) {
    //女
    return [
      {
        label: '裙子',
        value: 1,
      },
      {
        label: '包包',
        value: 0,
      },
    ];
  }
  return [];
};

export const tableData = Array.from({ length: 30 }).map((_, i) => {
  const gender = ~~(Math.random() * 2);
  return {
    id: i + 1,
    date: new Date().toLocaleString(),
    name: names[~~(Math.random() * 4)],
    clothes: getClothesByGender(gender)[~~(Math.random() * 2)].label,
    price: ~~(Math.random() * 1000),
    gender,
    img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    status: ~~(Math.random() * 2),
  };
});

// 数据项类型
export type ListItemType = (typeof tableData)[number];
// 使用TableColumn<ListItemType> 将会限制dataIndex的类型，但换来的是dataIndex有类型提示
export const columns: TableColumn<ListItemType>[] = [
  {
    title: '编号',
    align: 'center',
    dataIndex: 'id',
    sorter: true,
    width: 300,
    resizable: true,
    formItemProps: {},
  },
  {
    title: '品牌名称',
    align: 'center',
    dataIndex: 'name',
    sorter: true,
    resizable: true,
    formItemProps: {},
  },
  {
    title: '品牌首字母',
    align: 'center',
    dataIndex: 'firstLetter',
    sorter: true,
    resizable: true,
    formItemProps: {},
  },
  {
    title: '排序',
    align: 'center',
    dataIndex: 'firstLetter',
    sorter: true,
    resizable: true,
    formItemProps: {
      component: 'InputNumber',
    },
  },
  {
    title: '品牌制造商',
    align: 'center',
    dataIndex: 'factoryStatus',
    resizable: true,
    formItemProps: {
      component: 'Switch',
      componentProps: {
        checkedValue: 1,
        unCheckedChildren: 0,
      },
    },
  },
  {
    title: '是否显示',
    align: 'center',
    dataIndex: 'showStatus',
    resizable: true,
    formItemProps: {
      component: 'Switch',
      componentProps: {
        checkedValue: 1,
        unCheckedChildren: 0,
      },
    },
  },
  {
    title: '相关',
    align: 'center',
    dataIndex: 'price',
    formItemProps: {
      component: 'Select',
    },
    customRender: ({ record: _record }) => {
      return <div>111</div>;
    },
  },
];
