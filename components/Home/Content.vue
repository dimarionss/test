<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="2">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item v-for="n in 5" :key="n" link>
              <v-list-item-content>
                <v-list-item-title>List Item {{ n }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item link color="grey lighten-4">
              <v-list-item-content>
                <v-list-item-title>Refresh</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="10">
        <HomeCardUser />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
    console.log(this.$auth.user)
  }
}
</script>