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
      <v-btn class="cyan" dark @click="create">Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
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
    async create() {
      this.error = null
      const AllFieldsFilled = Object.keys(this.song).every(key=>!!this.song[key])
      if(!AllFieldsFilled){
        this.error = "Please fill in all the required fields."
        return
      }

      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
