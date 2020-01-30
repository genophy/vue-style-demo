<template>
    <div class="root">
        <div class="center">
            <div class="mobile">
                <div class="screen" :class="isOsOpen?'active':''"></div>
                <div class="home" @click="toggleOs"></div>
                <div class="inner"></div>
                <ul class="volume">
                    <li></li>
                    <li></li>
                </ul>
                <ul class="silent">
                    <li></li>
                </ul>
                <ul class="sleep">
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isOsOpen: false
        };
    },
    methods: {
        toggleOs() {
            this.isOsOpen = !this.isOsOpen;
        }
    }
};
</script>

<style scoped>
.root {
    position   : absolute;
    top        : 0;
    left       : 0;
    right      : 0;
    bottom     : 0;
    background : linear-gradient(to right, #e2e2e2, #4b4b4b, #e2e2e2);
    /* background: #262626; */
}

.center {
    position  : absolute;
    top       : 50%;
    left      : 50%;
    transform : translate(-50%, -50%);
}

.mobile {
    width         : 276px;
    height        : 580px;
    background    : #fff;
    border-radius : 30px;
    border        : 2px solid rgba(0, 0, 0, 0.3);
    box-sizing    : border-box;
    box-shadow    : inset 0 0 8px rgba(0, 0, 0, 0.3);
}

.screen {
    position        : relative;
    background      : #262626;
    width           : 256px;
    height          : 455px;
    margin          : 58px auto;
    overflow        : hidden;
    background      : url("../../src/assets/img/iphone-screen.jpg");
    background-size : cover;
}

.screen::before {
    content    : "";
    position   : absolute;
    top        : 0;
    left       : 0;
    background : rgba(255, 255, 255, 0.1);
    width      : 100%;
    height     : 100%;
    transform  : skewX(-5deg) translateX(-50%);
}

.screen.active {
    background      : url("../../src/assets/img/ssyernocopyright06.jpg");
    background-size : cover;
}

.home {
    position      : absolute;
    bottom        : 15px;
    left          : 50%;
    transform     : translateX(-50%);
    width         : 40px;
    height        : 40px;
    background    : #fff;
    box-shadow    : inset 0 0 7px rgba(0, 0, 0, 0.1);
    border-radius : 50%;
    border        : 2px solid #cecece;
    box-sizing    : border-box;
    cursor        : pointer;
}

.inner {
    position      : absolute;
    top           : 32px;
    left          : 50%;
    transform     : translateX(-50%);
    width         : 40px;
    height        : 4px;
    background    : #262626;
    border-radius : 2px;
    box-sizing    : border-box;
}

.inner::before {
    content       : "";
    position      : absolute;
    top           : -2px;
    left          : -22px;
    background    : #262626;
    width         : 8px;
    height        : 8px;
    border-radius : 50%;
}

.inner::after {
    content       : "";
    position      : absolute;
    top           : -16px;
    left          : 50%;
    background    : #262626;
    width         : 6px;
    height        : 6px;
    border-radius : 50%;
    transform     : translateX(-50%);
}

.volume {
    margin   : 0;
    padding  : 0;
    position : absolute;
    top      : 90px;
    left     : -2px;
}

.volume li {
    list-style                : none;
    width                     : 2px;
    height                    : 30px;
    background                : #ccc;
    margin                    : 10px 0;
    border-top-left-radius    : 4px;
    border-bottom-left-radius : 4px;
}

.silent {
    margin   : 0;
    padding  : 0;
    position : absolute;
    top      : 50px;
    left     : -2px;
}

.silent li {
    list-style                : none;
    width                     : 2px;
    height                    : 20px;
    background                : #ccc;
    margin                    : 10px 0;
    border-top-left-radius    : 4px;
    border-bottom-left-radius : 4px;
}

.sleep {
    margin   : 0;
    padding  : 0;
    position : absolute;
    top      : 90px;
    right    : -2px;
}

.sleep li {
    list-style                 : none;
    width                      : 2px;
    height                     : 30px;
    background                 : #ccc;
    margin                     : 10px 0;
    border-top-right-radius    : 4px;
    border-bottom-right-radius : 4px;
}
</style>

