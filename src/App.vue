<template>
  <div id="app">
    <navigation />
    <div id="content">
      <notifications />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Notifications from './components/Notifications.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Notifications
  }
};
</script>

<style>
html,
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#content {
  margin: 50px 10vw;
}
</style>
