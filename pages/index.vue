<template>
  <v-main class="main grey lighten-3">
    <HomeMain />
  </v-main>
</template>

<script>
export default {
  layout: 'index',
  data() {
    return {}
  },
  head() {
    return {
      htmlAttrs: {
        class: 'page-index',
      },
    }
  },
  beforeMount() {
    if (!this.$auth.loggedIn) {
      this.$router.push('/home')
    } else {
      this.$router.push('/home')
    }
  },
}
</script>
<style lang="scss" scoped>
.page-index {
  overflow-x: hidden;
  main {
    min-height: 100vh;
    position: relative;
  }
}
</style>
