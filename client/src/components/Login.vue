<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field type="email" v-model="email" name="email" label="Email"/>
          <br>
          <v-text-field type="password" v-model="password" name="password" label="Password"/>
          <br>
          <div class="error" v-html="error"/>
          <br>
          <v-btn class="cyan" dark @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationSevice from '@/services/AuthenticationSevice.js'
export default {
  data () {
    return {
      email:'',
      password:'',
      error: null
    }
  },
  methods: {
    async login (){
        try{
          const response = await AuthenticationSevice.login({
            email:this.email,
            password:this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        }
        catch(error){
          this.error = error.response.data.error
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error{
    color: red
  }
</style>
