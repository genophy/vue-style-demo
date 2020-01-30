<template>
    <div class="root">
        <h1 ref="title" @mousemove="onMousemove" @mouseout="onMouseout">Text Rotate On Mousemove</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        onMousemove(e) {
            const centerX = this.$refs.title.clientWidth / 2;
            const moveX = centerX - e.offsetX;

            this.$refs.title.style.transform = `perspective(500px) rotateY(${+moveX /
            20}deg)`;
        },
        onMouseout() {
            this.$refs.title.style.transform = '';
            this.$refs.title.style.color = '';
        }
    }
};
</script>

<style scoped>
.root {
    position        : absolute;
    top             : 0;
    left            : 0;
    bottom          : 0;
    right           : 0;
    overflow        : hidden;
    display         : flex;
    justify-content : center;
    align-items     : center;
}

h1 {
    margin      : 0;
    padding     : 0;
    color       : #262626;
    font-family : sans-serif;
    font-size   : 4em;
    text-align  : center;
    transition  : 0.3s;
    cursor      : pointer;
}
</style>

