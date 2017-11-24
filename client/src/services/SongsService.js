import Api from '@/services/Api.js'

export default {
    index() {
        return Api().get('songs')
    },
    show(songId){
        return Api().get(`songs/${songId}`)
    },
    post(song) {
        return Api().post('songs', song)
    },
    put(song) {
        return Api().put(`songs/${song.id}`, song)
    }
}