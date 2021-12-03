<template>
    <div class="tool" @load="restart()">
        <h1>
            {{ logo[0] }}
            <span>{{ logo[1] }}</span>
        </h1>
        <div class="search">
            <input v-model="videoUrl" type="text" />
            <button @click="searchVideo()">Go</button>
        </div>
        <div class="video">
            <youtube-iframe-vue v-if="forIframeDisplay" :videoId="this.videoUrl" />
        </div>
        <div class="setTime">
            <h1>Setting</h1>
            <input v-model="hour" type="number" min="0" />
            <input v-model="min" type="number" min="0" />
            <button v-if="Start">Started</button>
            <button @click="countDown()" v-else>Start</button>
        </div>
    </div>
</template>

<script>
import youtubeIframeVue from "./youtubeIframe.vue";

export default {
    name: "tool",
    components: {
        youtubeIframeVue
    },
    data() {
        return {
            logo: ["Music", "Limit"],
            hour: 0,
            min: 0,
            videoUrl: ' ',
            Start: false,
            video: ` `,
            forIframeDisplay: false,
        }
    },
    methods: {
        restart() {
            this.videoUrl = '';
        },
        searchVideo() {
            if (this.videoUrl === ' ' || this.videoUrl === '') {
                return;
            } else {
                this.forIframeDisplay = true;
            }
        },
        timesUp() {
            this.hour = 0;
            this.min = 0;
            this.Start = false;
            this.forIframeDisplay = false;
        },
        countDown() {
            let hour = this.hour;
            let min = this.min;
            let waitTime = ((hour * 60 * 60) + (min * 60)) * 1000;
            this.Start = true;
            setTimeout(this.timesUp, waitTime);
        }
    }
}
// https://www.youtube.com/watch?v=qDL3zhB8-MM
</script>

<style scoped>
.tool {
    background-color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 90vw;
}

.tool > h1 {
    color: #000;
    font-weight: lighter;
    margin-bottom: 10px;
}

.tool > h1 > span {
    color: #0088ff;
}

.search {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.search > input {
    outline: none;
    height: 30px;
    font-size: 1.2rem;
    padding-inline-start: 2px;
    border: solid 3px #0088ff;
    border-radius: 5px;
    max-width: 60vw;
}

.search > button {
    position: relative;
    left: -5px;
    height: 30px;
    width: 30px;
    font-size: 1.1rem;
    background-color: #0088ff;
    border: none;
    border-radius: 0 5px 5px 0;
    color: #fff;
}

.video {
    margin-top: 10px;
    background-color: #e5e5e5;
    width: 100%;
    height: 200px;
    border-radius: 15px;
}

.setTime {
    width: 90%;
    margin-top: 10px;
}

.setTime > h1 {
    margin-bottom: 8px;
    font-size: 1.5rem;
    font-weight: bold;
}

.setTime > input {
    outline: none;
    font-size: 1rem;
    border: 2px solid #0088ff;
    border-radius: 5px;
    padding: 2px 2px 2px 1px;
    width: 80px;
    margin-right: 5px;
    margin-bottom: 10px;
}

.setTime > button {
    cursor: pointer;
    outline: none;
    font-size: 1rem;
    border: 2px solid #0088ff;
    border-radius: 5px;
    padding: 2px 2px 2px 1px;
    width: 80px;
    background-color: #0088ff;
    color: #fff;
}
</style>
