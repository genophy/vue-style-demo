<template>
    <div class="root">
        <div class="center">
            <input v-model="checked" type="checkbox">
            <span>On</span>
            <span>Off</span>
        </div>
        <div class="result">checked: {{checked}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: true
        };
    }
};
</script>

<style lang="less" scoped>
.center {
    font-family     : sans-serif;
    position        : absolute;
    top             : 50%;
    left            : 50%;
    transition      : translate(-50%, -50%);
    transform-style : preserve-3d;
    perspective     : 200px;
    border          : 2px solid #000;
    height          : 40px;
    border-radius   : 40px;
}

input[type="checkbox"] {
    position           : relative;
    width              : 100px;
    height             : 40px;
    margin             : 0;
    -webkit-appearance : none;
    outline            : none;
    transition         : 0.5s;
    cursor             : pointer;
}

span {
    position        : absolute;
    top             : 0;
    width           : 50%;
    height          : 100%;
    line-height     : 40px;
    height          : 40px;
    text-align      : center;
    text-transform  : uppercase;
    font-weight     : bold;
    pointer-events  : none;
    color           : #ebebeb;
    transform-style : preserve-3d;
}

span:nth-child(2) {
    left                      : 0;
    border-top-left-radius    : 40px;
    border-bottom-left-radius : 40px;
    background                : #0f0;
}

span:nth-child(2)::before {
    content                   : "";
    position                  : absolute;
    top                       : 0;
    right                     : 0;
    width                     : 100%;
    height                    : 100%;
    background                : linear-gradient(90deg, #f00, #de0808);
    border-top-left-radius    : 40px;
    border-bottom-left-radius : 40px;
    transform-origin          : right;
    transition                : 1s;
    backface-visibility       : hidden;
}

input[type="checkbox"]:checked ~ span:nth-child(2)::before {
    transform : rotateY(180deg);
}

span:nth-child(3) {
    right                      : 0;
    border-top-right-radius    : 40px;
    border-bottom-right-radius : 40px;
    background                 : #f00;
}

span:nth-child(3)::before {
    content                    : "";
    position                   : absolute;
    top                        : 0;
    left                       : 0;
    width                      : 100%;
    height                     : 100%;
    background                 : linear-gradient(90deg, #0cd20c, #0f0);
    border-top-right-radius    : 40px;
    border-bottom-right-radius : 40px;
    transform-origin           : left;
    transition                 : 1s;
    backface-visibility        : hidden;
    transform                  : rotateY(180deg);
}

input[type="checkbox"]:checked ~ span:nth-child(3)::before {
    transform : rotateY(360deg);
}

.result {
    position  : absolute;
    top       : calc(50% + 100px);
    left      : 50%;
    font-size : 18px;
    color     : #2c2c2c;
}
</style>

