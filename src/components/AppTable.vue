<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, key) in data" :key="key">
        <td v-for="(el, elKey) in row" :key="elKey">{{ el }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    columns: Array,
    data: Array
  }
};
</script>

<style>
.table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
}

.table th {
  text-align: left;
}

.table td,
.table th {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
