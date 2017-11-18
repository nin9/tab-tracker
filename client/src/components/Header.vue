<template>
    <v-toolbar fixed class="cyan" dark>
        <router-link tag="v-toolbar-title" class="home mr-4" :to="{name: 'root'}">TabTracker</router-link>
        <v-toolbar-items>
            <v-btn :to="{name: 'songs'}" flat dark>
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" :to="{name: 'login'}" flat dark>
                Login
            </v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" :to="{name: 'register'}" flat dark>
                Sign Up
            </v-btn>
            <v-btn v-if="$store.state.isUserLoggedIn" @click="logout" flat dark>
                Logout
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods:{
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home{
        cursor: pointer;
    }
    .home:hover{
        color: #E9E
    }
</style>
