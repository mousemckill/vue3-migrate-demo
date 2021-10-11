<template>
  <button class="app-button">
    <slot></slot>
  </button>
</template>

<style>
.app-button {
  background-color: #3f50b5;
  color: #fff;
  border: none;
  box-sizing: border-box;
  border-radius: 4px;
  height: 36px;
  padding: 0 20px;
  font-size: 16px;
}

.app-button:active {
  background-color: #002884;
}
</style>
