<template>
    <div class="root">

        <a href="#">
            <svg>
                <rect></rect>
            </svg>
            Button
        </a>
    </div>
</template>

<script>
export default {
    name: 'CSS.SvgButton',
    data() {
        return {};
    }
};
</script>

<style scoped>
.root {
    height          : 100%;
    display         : flex;
    justify-content : center;
    align-items     : center;
}

a {
    position        : relative;
    padding         : 15px 30px;
    color           : #2196F3;
    letter-spacing  : 2px;
    text-decoration : none;
    text-transform  : uppercase;
    transition      : 0.5s;
}


a::before {
    content    : '';
    position   : absolute;
    top        : 0;
    left       : 0;
    width      : 50%;
    height     : 100%;
    background : rgba(255, 255, 255, .2);

}

a svg,
a svg rect {
    position : absolute;
    top      : 0;
    left     : 0;
    width    : 100%;
    height   : 100%;
    fill     : transparent;
}

a svg rect {
    stroke-width     : 2;
    stroke           : #2196F3;
    stroke-dasharray : 100;
    animation        : animate 2s linear infinite;
}

@keyframes animate {
    0% {
        stroke-dashoffset : 400;
    }
    100% {
        stroke-dashoffset : 0;
    }
}
</style>
