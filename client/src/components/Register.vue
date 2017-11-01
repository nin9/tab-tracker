<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="email"/>
    <br>
    <input type="password" v-model="password" name="password" placeholder="password"/>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationSevice from '@/services/AuthenticationSevice.js'
export default {
  data () {
    return {
      email:'',
      password:''
    }
  },
  methods: {
    async register (){
      const response = await AuthenticationSevice.register({
          email:this.email,
          password:this.password
        })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
