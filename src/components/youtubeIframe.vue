<template>
    <YouTube 
        :src="videoId" 
        height="200"
        width="100%"
        @ready="play"
        ref="youtube" />
</template>

<script>
import { defineComponent } from 'vue'
import YouTube from 'vue3-youtube'

export default defineComponent({
    components: { YouTube },
    props: {
        videoId: String,
        vars: {
            width: null,
            height: null,
        },
    },
    methods: {
        play() {
            this.$refs.youtube.playVideo()
        },
    },
})
</script>