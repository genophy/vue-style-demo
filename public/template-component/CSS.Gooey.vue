<template>
    <div id="container" ref="container">
        <div v-for="(i,idx) of boxList" :key="idx" class="box">{{i}}</div>
    </div>

</template>

<script>
export default {
    name   : 'CSS.Gooey',
    data() {
        return {
            boxList       : new Array(40),
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
        }, 5000);
    },
    beforeDestroy() {
        this._clearBoxRandomPosition();
    },
    methods: {
        _setBoxRandomPosition() {
            let gooey = this.$refs.container.getElementsByClassName('box');
            for (let i = 0; i < gooey.length; i++) {
                gooey[i].style.left = Math.floor(Math.random() * 90) + '%';
                gooey[i].style.top = Math.floor(Math.random() * 80) + '%';
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
    background : #fff;
    filter     : contrast(50);
    overflow   : hidden;
}

.box {
    position      : absolute;
    display       : block;
    z-index       : 1000;
    width         : 150px;
    height        : 150px;
    background    : #000;
    border-radius : 50%;
    filter        : blur(25px);
    transition    : 5s;
}
</style>
