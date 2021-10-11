<template>
  <div>
    <page-title>
      Каталог
      <template v-slot:button>
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
import { EXPORT_CATALOG_URL } from '../endpoints';
import useExport from '../hooks/useExport';

const columns = ['Категория', 'Количество товаров', 'Видимость'];
const data = [
  ['Смартфоны', '234', 'Активна'],
  ['Смартфоны > Apple', '36', 'Активна'],
  ['Смартфоны > Samsung', '78', 'Активна'],
  ['Планшеты', '14', 'Скрыта'],
  ['Смарт-часы', '9', 'Активна']
];

export default {
  setup() {
    const { isLoading, run } = useExport('Catalog.txt', EXPORT_CATALOG_URL);

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
