<template>
    <v-toolbar fixed class="cyan" dark>
        <router-link tag="v-toolbar-title" class="home mr-4" to="/">TabTracker</router-link>
        <!--TODO-->
        <!-- <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items> -->
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" to="login" flat dark>
                Login
            </v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" to="register" flat dark>
                Sign Up
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
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
