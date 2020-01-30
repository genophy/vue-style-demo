<template>
    <div id="container">
        <div v-for="(i,idx) of glitchList" :key="idx" class="glitch-box">{{i}}</div>
    </div>

</template>

<script>
export default {
    name   : 'CSS.Glitch',
    data() {
        return {
            glitchList    : new Array(40),
            randomInterval: null
        };
    },
    mounted() {
        this._setBoxRandomPosition();
        setTimeout(() => {
            this._setBoxRandomPosition();
        }, 0);
        this.randomInterval = setInterval(() => {
            this._setBoxRandomPosition();
        }, 300);
    },
    beforeDestroy() {
        this._clearBoxRandomPosition();
    },
    methods: {
        _setBoxRandomPosition() {
            let glitch = document.getElementsByClassName('glitch-box');
            for (let i = 0; i < glitch.length; i++) {
                glitch[i].style.left = Math.floor(Math.random() * 90) + '%';
                glitch[i].style.top = Math.floor(Math.random() * 80) + '%';
                glitch[i].style.width = Math.floor(Math.random() * 400) + 'px';
                glitch[i].style.height = Math.floor(Math.random() * 100) + 'px';
                glitch[i].style.backgroundPosition = Math.floor(Math.random() * 50) + 'px';
            }

        },
        _clearBoxRandomPosition() {
            if (this.randomInterval) {
                clearInterval(this.randomInterval);
            }
        }
    }
};
</script>

<style scoped>


#container {
    position   : relative;
    height     : 100%;
    width      : 100%;
    background : url("../../src/assets/img/ssyernocopyright03.jpg") fixed repeat;
}

.glitch-box {
    position   : absolute;
    z-index    : 1;
    background : url("../../src/assets/img/ssyernocopyright03.jpg") fixed repeat;
}
</style>
