<template>
  <v-main class="main grey lighten-3">
    <HomeContent v-if="$auth.loggedIn" />
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
