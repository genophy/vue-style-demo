<template>
    <div class="root">
        <a href="#">
            <span>Hello World</span>
            <span></span>
            <span></span>
            <span>Hello World</span>
        </a>
    </div>
</template>
<style lang="less" scoped>
.root {
    margin          : 0;
    padding         : 0;
    display         : flex;
    justify-content : center;
    align-items     : center;
    min-height      : 100%;
    font-family     : sans-serif;
}

a {
    position        : relative;
    width           : 160px;
    height          : 60px;
    transform-style : preserve-3d;
    transform       : perspective(600px) rotateY(25deg);
    transition      : 2s;
}

a:hover {
    transform : perspective(600px) rotateY(385deg);
}

a span {
    position        : absolute;
    top             : 0;
    left            : 0;
    width           : 100%;
    height          : 100%;
    display         : flex;
    justify-content : center;
    align-items     : center;
    font-size       : 24px;
    letter-spacing  : 2;
    color           : #333;
    text-transform  : uppercase;
    box-sizing      : border-box;
    background      : #fff;
}

a span:nth-child(1) {
    transform    : translateZ(20px);
    border-left  : 6px solid #65cbf9;
    border-right : 6px solid #65cbf9;
}

a span:nth-child(2) {
    transform : rotateY(90deg) translateZ(140px);
}

a span:nth-child(3) {
    transform : rotateY(90deg) translateZ(-20px);
}

a span:nth-child(4) {
    transform    : translateZ(-20px);
    border-left  : 6px solid #65cbf9;
    border-right : 6px solid #65cbf9;
}

a span:nth-child(2), a span:nth-child(3) {
    width      : 40px;
    height     : 100%;
    background : #0095d8;
}
</style>
