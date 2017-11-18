<template>
  <div>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song"/>
    </v-flex>
    <v-flex xs6>
      <you-tube :youtubeId="song.youtubeId"/>
    </v-flex>
  </v-layout>
  <v-layout>
    <v-flex xs6>
      <lyrics :lyrics="song.lyrics"/>
    </v-flex>
    <v-flex xs6>
      <tab :tab="song.tab"/>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongsService from '@/services/SongsService'

export default {
    components: {
        Panel,
        SongMetadata,
        YouTube,
        Lyrics,
        Tab
    },
    data () {
        return{
          song: {}
        }
    },
    async mounted () {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea{
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
