<template>
    <div class="root">
        <svg>
            <circle cx="70" cy="70" r="70"></circle>
        </svg>
    </div>

</template>

<script>
export default {
    name: 'CSS.SvgLoading'


};
</script>

<style scoped>


.root {
    position        : relative;
    height          : 100%;
    width           : 100%;
    display         : flex;
    flex-flow       : row nowrap;
    justify-content : center;
    align-items     : center;
    background      : #0b0f25;
}

svg {
    position  : relative;
    width     : 150px;
    height    : 150px;
    animation : rotate 2s linear infinite;
}

@keyframes rotate {
    0% {
        transform : rotate(0deg);
    }

    100% {
        transform : rotate(360deg);
    }
}

svg circle {
    width             : 100%;
    height            : 100%;
    fill              : none;
    stroke-width      : 10;
    stroke            : #00a1ff;
    stroke-linecap    : round;
    transform         : translate(5px, 5px);
    stroke-dasharray  : 440;
    stroke-dashoffset : 440;
    animation         : animate 4s linear infinite;
}

@keyframes animate {
    0%, 100% {
        stroke-dashoffset : 440;
    }
    50% {
        stroke-dashoffset : 0;
    }
    50.1% {
        stroke-dashoffset : 880;
    }
}

</style>
