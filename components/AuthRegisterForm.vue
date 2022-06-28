<template>
  <v-form class="auth" ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="email" :rules="emailRules" label="email" prepend-icon="mdi-email" required></v-text-field>
    <v-text-field v-model="name" label="name" prepend-icon="mdi-user" required></v-text-field>
    <v-text-field v-model="password" :rules="passRules" label="password" @click:append="show = !show" prepend-icon="mdi-lock" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'" required></v-text-field>
    <v-checkbox v-model="agree" :rules="[(v) => !!v || 'You must agree to continue!']" label="agree" required></v-checkbox>
    <div class="form-btns">
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="sendForm">Send</v-btn>
      <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      name:'',
      valid: true,
      password: null,
      agree: false,
      show: false,
      passRules: [(v) => !!v || 'Password is required'],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      dataForm: [],
    }
  },
  mounted() {},
  methods: {
    async sendForm(e) {
      if (this.$refs.form.validate()) {
        this.dataForm = {
          name: this.name,
          email: this.email,
          password: this.password,
        }
        this.$auth.loginWith('local', { data: this.dataForm })
      }
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>

<style scoped lang="scss">
.auth {
  width: 100%;
  &-controls {
  }
  &-btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
