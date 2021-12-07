<template>
    <div class="tool" @load="restart()">
        <h1>
            {{ logo[0] }}<span>{{ logo[1] }}</span>
        </h1>
        <div class="search">
            <input v-model="videoUrl" type="text" />
            <button @click="searchVideo()">Go</button>
        </div>
        <div class="video">
            <youtube-iframe-vue v-if="forIframeDisplay" :videoId="this.videoProp" />
        </div>
        <h1 class="seH1">Setting</h1>
        <div class="setTime">
            <div class="aset">
                <p style="display: inline-block;">hour</p>
                <br />
                <input v-model="hour" type="number" min="0" />
            </div>
            <div class="aset">
                <p style="display: inline-block;">min</p><br>
                <input v-model="min" type="number" min="0" />
            </div>
            <button v-if="Start">Started</button>
            <button @click="countDown()" v-else>Start</button>
        </div>
        <div v-if="Start" class="countDownTime">
                <p>{{ hourL }} : {{ minL }} : {{ secL }}</p>
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
            videoProp: ' ',
            Start: false,
            video: ` `,
            forIframeDisplay: false,
            hourL: '00',
            minL: '00',
            secL: '00',
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
                this.forIframeDisplay = false;
                this.videoProp = this.videoUrl;
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
            let sec = 0;
            if(hour === 0 && min === 0) {
                return;
            }
            this.Start = true;
            let totalSec = hour*3600 + min*60;
            this.hourL = hour < 10 ? "0" + hour : hour;
            this.minL = min < 10 ? "0" + min : min;
            this.secL = '00';
            let down = setInterval(() => {
                totalSec--;
                if(totalSec == 0) {
                    clearInterval(down);
                    this.Start = false;
                    this.forIframeDisplay = false;
                    setTimeout(() => {
                        alert('Times Up!!');
                    }, 300);
                    return;
                }
                hour = totalSec/3600;
                hour = ~~hour;
                min = totalSec%3600;
                min = min/60;
                min = ~~min;
                sec = totalSec - hour*3600 - min*60;
                this.hourL = hour < 10 ? "0" + hour : hour;
                this.minL = min < 10 ? "0" + min : min;
                this.secL = sec < 10 ? "0" + sec : sec;
            }, 1000);
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
    align-items: center;
    max-width: 90vw;
}

.tool > h1:first-child {
    color: #000;
    font-weight: 300;
    margin-bottom: 10px;
}

.tool > h1:first-child > span {
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
    display: flex;
    flex-wrap: wrap;
}

.seH1 {
    margin-top: 8px;
    font-size: 1.5rem;
    font-weight: normal;
}

.setTime  input {
    outline: none;
    font-size: 1rem;
    border: 2px solid #0088ff;
    border-radius: 5px;
    padding: 2px 2px 2px 1px;
    width: 70px;
    margin-right: 5px;
    margin-bottom: 10px;
}

.aset>p {
    color: #5a5a5a;
    font-weight: lighter;
    text-transform: capitalize;
}

.setTime > button {
    cursor: pointer;
    outline: none;
    font-size: 1rem;
    border: 2px solid #0088ff;
    border-radius: 5px;
    padding: 2px 2px 2px 1px;
    height: 26px;
    width: 80px;
    margin-top: 19.5px;
    background-color: #0088ff;
    color: #fff;
    font-weight: 300;
}

.countDownTime>p {
    font-size: 1.2rem;
}
</style>
