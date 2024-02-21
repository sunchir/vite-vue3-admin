<template>
  <div>
    <Card title="查询表单基本使用示例" style="margin-top: 20px">
      <DynamicTable
        size="small"
        bordered
        :data-request="getBrandList"
        :columns="columns"
        editable-type="cell"
        row-key="id"
        @resize-column="handleResizeColumn"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'name'">
            {{ record.name }} <a class="text-red-500">[测试bodyCell]</a>
          </template>
        </template>
      </DynamicTable>
    </Card>
  </div>
</template>

<script lang="ts" setup>
  import { Card } from 'ant-design-vue';
  import { columns } from './columns';
  import { useTable } from '@/components/core/dynamic-table';
  import { getBrandList } from '@/api/mall/pms/brand';
  const [DynamicTable] = useTable();

  const handleResizeColumn = (w, col) => {
    // console.log('w', w, col);
    col.width = w;
  };
</script>

<style lang="less" scoped></style>
