<template>
  <div>
    <page-title>
      Заказы
      <template #button>
        <app-button @click="onExport">
          <template v-if="isLoading">
            Скачивание...
          </template>
          <template v-else>
            Экспорт
          </template>
        </app-button>
      </template>
    </page-title>
    <app-table :columns="$options.table.columns" :data="$options.table.data" />
  </div>
</template>

<script>
import PageTitle from './PageTitle.vue';
import AppButton from './AppButton.vue';
import AppTable from './AppTable.vue';
import { EXPORT_ORDERS_URL } from '../endpoints';
import useExport from '../hooks/useExport';

const columns = ['Товар', 'Количество', 'Статус'];
const data = [
  ['IPhone 12', '1', 'Выдан'],
  ['IPhone 13', '2', 'Оплачен'],
  ['Galaxy S21', '1', 'В доставке']
];

export default {
  setup() {
    const { isLoading, run } = useExport('Orders.txt', EXPORT_ORDERS_URL);

    return {
      isLoading,
      onExport: run
    };
  },
  table: {
    columns,
    data
  },
  components: {
    PageTitle,
    AppButton,
    AppTable
  }
};
</script>
