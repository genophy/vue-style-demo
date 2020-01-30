<template>
    <div class="root">
        <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CSS3D.WavyCircleLoading',
    data() {
        return {};
    }
};
</script>

<style scoped>
.root {
    margin          : 0;
    padding         : 0;
    display         : flex;
    flex-flow       : row nowrap;
    justify-content : center;
    align-items     : center;

    height          : 100%;

}

.loader {
    position        : relative;
    width           : 300px;
    height          : 300px;
    transform-style : preserve-3d;
    transform       : perspective(500px) rotateX(60deg);
}

.loader span {
    position      : absolute;
    display       : block;
    border-style  : solid;
    border-width  : 2px;
    box-sizing    : border-box;
    border-radius : 50%;
    transform     : translateZ(-100px);
    animation     : animate 3s ease-in-out infinite;
}

@keyframes animate {
    0%, 100% {
        transform : translateZ(-100px);
    }
    50% {
        transform : translateZ(100px);
    }
}

.loader span:nth-child(1) {
    top             : 0;
    left            : 0;
    right           : 0;
    bottom          : 0;
    animation-delay : 1.4s;
    border-color    : #0CD20C;
}

.loader span:nth-child(2) {
    top             : 10px;
    left            : 10px;
    right           : 10px;
    bottom          : 10px;
    animation-delay : 1.3s;
    border-color    : #96D24E;
}

.loader span:nth-child(3) {
    top             : 20px;
    left            : 20px;
    right           : 20px;
    bottom          : 20px;
    animation-delay : 1.2s;
    border-color    : #D2AF4F;
}

.loader span:nth-child(4) {
    top             : 30px;
    left            : 30px;
    right           : 30px;
    bottom          : 30px;
    animation-delay : 1.1s;
    border-color    : #D26E32;
}

.loader span:nth-child(5) {
    top             : 40px;
    left            : 40px;
    right           : 40px;
    bottom          : 40px;
    animation-delay : 1s;
    border-color    : #D23C2F;
}

.loader span:nth-child(6) {
    top             : 50px;
    left            : 50px;
    right           : 50px;
    bottom          : 50px;
    animation-delay : 0.9s;
    border-color    : #D2407F;
}

.loader span:nth-child(7) {
    top             : 60px;
    left            : 60px;
    right           : 60px;
    bottom          : 60px;
    animation-delay : 0.8s;
    border-color    : #CA4DD2;
}

.loader span:nth-child(8) {
    top             : 70px;
    left            : 70px;
    right           : 70px;
    bottom          : 70px;
    animation-delay : 0.7s;
    border-color    : #734CD2;
}

.loader span:nth-child(9) {
    top             : 80px;
    left            : 80px;
    right           : 80px;
    bottom          : 80px;
    animation-delay : 0.6s;
    border-color    : #596BD2;
}

.loader span:nth-child(10) {
    top             : 90px;
    left            : 90px;
    right           : 90px;
    bottom          : 90px;
    animation-delay : 0.5s;
    border-color    : #5B95D2;
}

.loader span:nth-child(11) {
    top             : 100px;
    left            : 100px;
    right           : 100px;
    bottom          : 100px;
    animation-delay : 0.4s;
    border-color    : #65D1D2;
}

.loader span:nth-child(12) {
    top             : 110px;
    left            : 110px;
    right           : 110px;
    bottom          : 110px;
    animation-delay : 0.3s;
    border-color    : #90D2B5;
}

.loader span:nth-child(13) {
    top             : 120px;
    left            : 120px;
    right           : 120px;
    bottom          : 120px;
    animation-delay : 0.2s;
    border-color    : #9ED288;
}

.loader span:nth-child(14) {
    top             : 130px;
    left            : 130px;
    right           : 130px;
    bottom          : 130px;
    animation-delay : 0.1s;
    border-color    : #C2D277;
}

.loader span:nth-child(15) {
    top             : 140px;
    left            : 140px;
    right           : 140px;
    bottom          : 140px;
    animation-delay : 0s;
    border-color    : #D2CBAA;
}
</style>
