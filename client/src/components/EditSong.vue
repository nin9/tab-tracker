<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field type="text" required :rules="[required]" v-model="song.title" name="title" label="Title"/>
        <v-text-field type="text" required :rules="[required]" v-model="song.artist" name="artist" label="Artist"/>
        <v-text-field type="text" required :rules="[required]" v-model="song.genre" name="genre" label="Genre"/>
        <v-text-field type="text" required :rules="[required]" v-model="song.album" name="album" label="Album"/>
        <v-text-field type="text" required :rules="[required]" v-model="song.albumImageUrl" name="albumImageUrl" label="Album Image Url"/>
        <v-text-field type="text" required :rules="[required]" v-model="song.youtubeId" name="youtubeId" label="YouTube ID"/>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field type="text" multi-line required :rules="[required]" v-model="song.tab" name="tab" label="Tab"/>
        <v-text-field type="text" multi-line required :rules="[required]" v-model="song.lyrics" name="lyrics" label="Lyrics"/>
      </panel>
      <v-alert class="ml-2" color="error" icon="warning" :value="error" transition="scale-transition">
        {{error}}
      </v-alert>
      <v-btn class="cyan" dark @click="save">Save Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
 methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  },
  components: {
        Panel
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
