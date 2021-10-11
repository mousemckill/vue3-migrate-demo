<template>
  <div v-if="notEmpty" class="notification">
    {{ text }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null
    };
  },
  computed: {
    notEmpty() {
      return this.$store.state.notifications.length > 0;
    },
    text() {
      return this.$store.state.notifications[
        this.$store.state.notifications.length - 1
      ];
    }
  },
  watch: {
    text(val) {
      if (val) {
        this.timer = setTimeout(() => {
          this.$store.commit('removeAllNotification');
        }, 4000);
      }
    }
  },
  beforeUnmount() {
    clearTimeout(this.timer);
  }
};
</script>

<style>
.notification {
  padding: 20px;
  border-radius: 5px;
  background-color: #26a69a;
  margin-bottom: 20px;
  color: #fff;
}
</style>
