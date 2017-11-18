<template>
    <panel title="YouTube Video" class="ml-2">
        <youtube :video-id="youtubeId" :player-width="800" :player-height="300"></youtube>
    </panel>
</template>
<script>
import Panel from '@/components/Panel'

export default {
    props: [
        'youtubeId'
    ],
    components:{
        Panel
    }
}
</script>
<style scoped>

</style>
