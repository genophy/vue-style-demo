<template>
    <div class="root">
        <div class="container">
            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>90<span>%</span></h2>
                        </div>
                    </div>
                    <h2 class="text">Html</h2>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>85<span>%</span></h2>
                        </div>
                    </div>
                    <h2 class="text">CSS</h2>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>60<span>%</span></h2>
                        </div>
                    </div>
                    <h2 class="text">JavaScript</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CSS.CircularProgressBar',
    data() {
        return {};
    }
};
</script>

<style scoped lang="less">

* {
    margin      : 0;
    padding     : 0;
    font-family : "VT323", sans-serif;
}

.root {
    display          : flex;
    justify-content  : center;
    align-items      : center;

    background-color : #101010;
}

.container {
    position        : relative;
    width           : 900px;
    display         : flex;
    justify-content : space-around;
}

.container .card {
    position        : relative;
    width           : 250px;
    background      : linear-gradient(0deg, #1b1b1b, #222, #1b1b1b);
    display         : flex;
    justify-content : center;
    align-items     : center;
    height          : 300px;
    border-radius   : 4px;
    text-align      : center;
    overflow        : hidden;
    transition      : 0.5s;
}

.container .card:hover {
    transform  : translateY(-10px);
    box-shadow : 0 15px 35px rgba(0, 0, 0.5);
}

.container .card:before {
    content        : '';
    position       : absolute;
    top            : 0;
    left           : -50%;
    width          : 100%;
    height         : 100%;
    background     : rgba(255, 255, 255, 0.1);
    pointer-events : none;
    z-index        : 1;
}

.container .card:hover:before {
    /*background     : rgba(255, 255, 255, 0.2);*/
    background : linear-gradient(90deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.2));
}

.percent {
    position      : relative;
    width         : 150px;
    height        : 150px;
    border-radius : 50%;
    box-shadow    : inset 0 0 50px #000;
    background    : rgba(15, 15, 15, 1);
    z-index       : 10;
}

.percent .number {
    position        : absolute;
    top             : 0;
    left            : 0;
    width           : 100%;
    height          : 100%;
    display         : flex;
    justify-content : center;
    align-items     : center;
    border-radius   : 50%;

}

.percent .number h2 {
    color      : #777;
    font-size  : 60px;
    transition : 0.5s;
}

.card:hover .percent .number h2 {
    color     : #fff;
    font-size : 90px;
}

.percent .number h2 span {
    font-size  : 36px;
    color      : #777;
    transition : 0.5s;
}

.card:hover .percent .number h2 span {
    font-size : 48px;
    color     : #fff;
}

.text {
    position       : relative;
    color          : #777;
    margin-top     : 20px;
    font-size      : 36px;
    letter-spacing : 1px;
    text-transform : uppercase;
    transition     : 0.5s;
}

.card:hover .text {
    color : #fff;
}

svg {
    position : relative;
    width    : 150px;
    height   : 150px;
    z-index  : 10;
}

svg circle {
    width          : 100%;
    height         : 100%;
    fill           : none;
    stroke         : #191919;
    stroke-width   : 10;
    stroke-linecap : round;
    transform      : translate(5px, 5px);
}

svg circle:nth-child(2) {
    stroke-dasharray  : 440;
    stroke-dashoffset : 440;
}

.card:nth-child(1) svg circle:nth-child(2) {
    stroke-dashoffset : calc(440 - (440 * 90) / 100);
    stroke            : #00ff43;
}

.card:nth-child(2) svg circle:nth-child(2) {
    stroke-dashoffset : calc(440 - (440 * 85) / 100);
    stroke            : #00a1ff;
}

.card:nth-child(3) svg circle:nth-child(2) {
    stroke-dashoffset : calc(440 - (440 * 60) / 100);
    stroke            : #ff04f7;
}
</style>
