<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-app-bar-nav-icon v-if="$auth.loggedIn" @click="$store.commit('platform/leftBar', !$store.getters['platform/GET_LEFTBAR_STATE'])"></v-app-bar-nav-icon>
      <v-btn text v-if="!$auth.loggedIn" @click="login">Login</v-btn>
      <v-btn text v-if="!$auth.loggedIn" @click="login">Register</v-btn>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    links: ['Main', 'About', 'Profile', 'ContactUS'],
  }),
  methods: {
    async login() {
      await this.$auth.loginWith('auth0')
    },
  },
}
</script>