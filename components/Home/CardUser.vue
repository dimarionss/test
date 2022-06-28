<template>
  <v-card class="mx-auto">
    <v-img class="white--text align-end" height="200px" src="https://picsum.photos/510/300?random">
      <v-card-title>{{$auth.user.email}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{$auth.user.nickname}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{$auth.user.family_name}}</div>

      <div>{{$auth.user.given_name}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text>More</v-btn>
    </v-card-actions>
  </v-card>
</template>