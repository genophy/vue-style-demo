<template>
    <div class="root">
        <img class="img" src="../../src/assets/img/ssyernocopyright34.jpg" alt="">
        <div ref="bg" class="bg" @click="handleChangeColor"></div>
    </div>


</template>

<script>
export default {
    name   : 'CSS.ChangeImageColor',
    mounted() {

        setInterval(() => {
            this.handleChangeColor();
        }, 600);

    },
    methods: {
        handleChangeColor() {
            this.$refs.bg.style.backgroundColor = `rgba(${this._randomColor()},${this._randomColor()},${this._randomColor()})`;
        },
        _randomColor() {
            return Math.floor(Math.random() * 255);
        }
    }
};
</script>

<style scoped>
.root {
    position : relative;
    height   : 100%;
    width    : 100%;
    background: #0b0f25;
    overflow : hidden;
}

.img {
    height : 100%;
    object-fit: contain;
}

.bg {
    position       : absolute;
    left           : 0;
    right          : 0;
    top            : 0;
    bottom         : 0;
    z-index        : 1;
    mix-blend-mode : hue;
}
</style>
