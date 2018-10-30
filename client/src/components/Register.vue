<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="Email" v-model='email'/>
    <input type="password" name="password" placeholder="Password" v-model='password'/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({ email: this.email, password: this.password })
      console.log(response.data)
    }
  }
  // watch: {
  //   email (value) {
  //     console.log('email has changed', value)
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 200)
  // }
}
</script>
