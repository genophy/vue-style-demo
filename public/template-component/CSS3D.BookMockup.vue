<template>
    <div class="root">
        <div class="book">
            <img src="../../src/assets/img/book1-1.jpg" alt="">
        </div>
    </div>
</template>

<style scoped>
.root {
    display         : flex;
    justify-content : center;
    align-items     : center;
    transform-style : preserve-3d;
    perspective     : 1000px;
    padding-top     : 150px;
}

.root .book {
    position        : relative;
    width           : 383px;
    height          : 567px;
    box-shadow      : 20px 20px 20px rgba(0, 0, 0, 0.2);
    transform-style : preserve-3d;
    transition      : 0.5s;
}

.root .book:hover {
    transform  : rotateY(35deg);
    box-shadow : 0 20px 20px rgba(0, 0, 0, 0.2);
}

.root .book:active {
    transform : rotateY(180deg);
}

.root .book:before {
    content             : '';
    position            : absolute;
    left                : 0;
    width               : 60px;
    height              : 100%;
    transform-origin    : left;
    background-image    : url("../../src/assets/img/book1-2.jpg");
    background-position : center;
    transform           : rotateY(-90deg) translateX(-60px);
}

.root .book:after {
    content             : '';
    position            : absolute;
    left                : 0;
    width               : 100%;
    height              : 100%;
    transform-origin    : left;
    background-image    : url("../../src/assets/img/book1-3.jpg");
    background-position : center;
    transform           : rotateY(180deg) translateX(-100%) translateZ(60px);
}

.root .book img {
    position   : absolute;
    top        : 0;
    left       : 0;
    width      : 100%;
    height     : 100%;
    object-fit : cover;
}
</style>

