<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="">      
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
    components: {
        Panel
    },
    data () {
        return{
        }
    },
    async mounted () {
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
