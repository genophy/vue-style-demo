<template>
    <div class="root">
        <div class="square">
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
                <h2>Post Title</h2>
                <p>Lorem ipsum dolor sit amet, consecteutr adipisicing elit ,sed do eimusmod tempor incididdunt ut labore et dolore anngna aliqua,Ut enim ad minim veniam.</p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'CSS.CreativeDivBoxDesign'

};
</script>

<style scoped>

.root {
    position        : relative;

    display         : flex;
    justify-content : center;
    align-items     : center;
    font-family     : 'Orbitron', sans-serif;
    width           : 100%;
    height          : 100%;
    background      : #000;
    overflow        : hidden;
}

.square {
    position        : relative;
    width           : 400px;
    height          : 400px;
    display         : flex;
    justify-content : center;
    align-items     : center;
}

.square span:nth-child(1) {
    position      : absolute;
    top           : 0;
    left          : 0;
    width         : 100%;
    height        : 100%;
    border        : 2px solid #fff;
    border-radius : 38% 62% 63% 37% / 41% 44% 56% 59%;
    transition    : 0.5s;
    animation     : animate 6s linear infinite;
}

.square span:nth-child(1) {
    border     : none;
    background : rgba(0, 0, 255, 0.8);

}

.square span:nth-child(2) {
    position      : absolute;
    top           : 0;
    left          : 0;
    width         : 100%;
    height        : 100%;
    border        : 2px solid #fff;
    border-radius : 38% 62% 63% 37% / 41% 44% 56% 59%;
    transition    : 0.5s;
    animation     : animate 8s linear infinite;
}

.square span:nth-child(2) {
    border     : none;
    background : rgba(0, 0, 255, 0.8);

}


.square span:nth-child(3) {
    position      : absolute;
    top           : 0;
    left          : 0;
    width         : 100%;
    height        : 100%;
    border        : 2px solid #fff;
    border-radius : 38% 62% 63% 37% / 41% 44% 56% 59%;
    transition    : 0.5s;
    animation     : animate2 10s linear infinite;
}

.square span:nth-child(3) {
    border     : none;
    background : rgba(0, 0, 255, 0.8);
}

@keyframes animate {
    0% {
        transform : rotate(0deg);
    }
    100% {
        transform : rotate(360deg);
    }

}

@keyframes animate2 {
    0% {
        transform : rotate(360deg);
    }
    100% {
        transform : rotate(0deg);
    }

}

.content {
    position   : relative;
    padding    : 40px 60px;
    color      : #fff;
    text-align : center;
    transition : 0.5s;
    z-index    : 1000;
}

.content a {
    position        : relative;
    display         : inline-block;
    margin-top      : 10px;
    border          : 2px solid #fff;
    padding         : 6px 18px;
    text-decoration : none;
    color           : #fff;
    font-weight     : 600;
    border-radius   : 73% 27% 44% 56% / 49% 44% 56% 51%;
}

.content a:hover {
    background : #fff;
    color      : #333;
}
</style>
