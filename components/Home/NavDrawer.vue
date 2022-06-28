<template>
  <v-navigation-drawer absolute app temporary v-model="leftBar">
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="$auth.user.picture"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">{{$auth.user.name}}</v-list-item-title>
          <v-list-item-subtitle>{{$auth.user.email}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item link to v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block @click="logout()">logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      selectedItem: 0,
      items: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
    }
  },
  computed: {
    leftBar: {
      get() {
        return this.$store.getters['platform/GET_LEFTBAR_STATE']
      },
      set(value) {
        this.$store.commit('platform/leftBar', value)
      },
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
<style lang="scss" scoped>
</style>