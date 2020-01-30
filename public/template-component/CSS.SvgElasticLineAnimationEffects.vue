<template>
    <div class="root">
        <svg>
            <path></path>
        </svg>
        <svg>
            <path></path>
        </svg>
    </div>

</template>

<script>
export default {
    name: 'CSS.SvgElasticLineAnimationEffects'
};
</script>

<style scoped>
.root {
    display         : flex;
    justify-content : center;
    align-items     : center;

    position        : relative;
    width           : 100%;
    height          : 100%;
    background      : #000;
    overflow        : hidden;
}

svg {
    position : absolute;
    width    : 400px;
    fill     : none;
}

svg:nth-child(2) {
    filter : blur(40px);
}

svg path {
    d              : path("M0,25 C150,110 150,-60 300,25");
    stroke         : #ff0092;
    stroke-width   : 50;
    stroke-linecap : round;
    transform      : translate(50px, 50%);
    animation      : animate 2s ease-in-out infinite;
}

@keyframes animate {
    0% {
        stroke : #ff0092;
        d      : path("M0,25 C150,110 150,-60 300,25");
    }
    50% {
        stroke : #0f0;
        d      : path("M0,25 C160,-50 140,110 300,25");
    }
}
</style>
