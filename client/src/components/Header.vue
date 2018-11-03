<template>
  <v-toolbar fixed class="deep-purple" dark>
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'songs'})">
        TabTracker
      </span>
    </v-toolbar-title>
  <v-toolbar-items>
    <v-btn flat dark to="songs">Browse</v-btn>
  </v-toolbar-items>
  <v-spacer></v-spacer>
  <v-toolbar-items>
      <v-btn flat to="login" v-if="!$store.state.isUserLoggedIn">Login</v-btn>
      <v-btn flat to="register" v-if="!$store.state.isUserLoggedIn">Register</v-btn>
      <v-btn flat @click="logout" v-if="$store.state.isUserLoggedIn">Logout</v-btn>
  </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style>
.home:hover {
  color: #b388ff;
}
</style>
