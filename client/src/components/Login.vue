
<template>
<v-layout>
  <v-flex xs6 offset-xs3>
    <panel title="Login">
      <v-text-field prepend-icon="person" name="email" label="Email" type="text" v-model="email"></v-text-field>
      <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
      <div class="errorMsg" v-html="error"/>
      <v-spacer></v-spacer>
      <v-btn color="deep-purple" dark @click="login">Register</v-btn>
    </panel>
  </v-flex>
</v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: { Panel }
}
</script>

<style scoped>
.errorMsg {
  /* background: white; */
  color: red;
  /* text-align: center; */
  margin: 0 5vw;
}
.box {
  margin: 0 auto;
}
.container {
  border: 1px solid black;
}
</style>
