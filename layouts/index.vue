<template>
  <v-app class="app">
    <HomeAppBar />
    <HomeNavDrawer v-if="$auth.loggedIn"/>
    <Nuxt />
  </v-app>
</template>
<script>
export default {
  data() {
    return {}
  },
  beforeMount() {
    console.log(this.$config)
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.app {
  position: relative;
  .main {
    position: relative;
  }
}
</style>
