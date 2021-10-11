<template>
  <div class="page-title">
    <h1 class="page-title__header">
      <slot></slot>
    </h1>
    <slot name="button"></slot>
  </div>
</template>

<style>
.page-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.page-title__header {
  margin: 0;
}
</style>
