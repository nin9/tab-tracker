<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <v-text-field type="email" v-model="email" name="email" label="Email"/>
          <br>
          <v-text-field type="password" v-model="password" name="password" label="Password"/>
          <br>
          <div class="error" v-html="error"/>
          <br>
          <v-btn class="cyan" dark @click="register">Register</v-btn>
      </panel>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationSevice from '@/services/AuthenticationSevice.js'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email:'',
      password:'',
      error: null
    }
  },
  methods: {
    async register (){
        try{
          const response = await AuthenticationSevice.register({
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
  },
  components: {
        Panel
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error{
    color: red
  }
</style>
