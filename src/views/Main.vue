<template>
    <div class="main">
        <div class="main__header">520 COOL CSS3</div>
        <div class="main__container">
            <div class="main__nav">

                <div v-for="route of routes" :key="route.path" class="nav-btn"
                     :class="currentRouteName === route.name?'selected':''" @click="btnGotoRoute(route)">

                    <div class="nav__icon">
                        <img class="icon" :src="'/template-icon/' + route.name + '.png'" alt="">
                    </div>
                    <div class="nav__name">
                        {{route.name}}
                    </div>

                </div>
            </div>
            <div class="main__viewer">
                <router-view/>
            </div>
        </div>
        <div class="main__footer">
            <div>
                <span>@520space</span>
                <span>genophy@gmail.com</span>
                <span>用于个人学习测试的网站</span>
                <a target="_blank" href="http://www.beian.miit.gov.cn" style="display:inline-block;text-decoration:none;height:14px;line-height:14px;color:#4980b7;">苏ICP备18068907号</a>
            </div>
            <div style="margin:0 auto;">
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011302320662"
                   style="display:inline-block;text-decoration:none;height:14px;line-height:14px;"><img src="../assets/img/beian.png" style="float:left; height: 14px;"/>
                    <p style="float:left;height:14px;line-height:14px;margin: 0px 0px 0px 5px; color:#4980b7;">苏公网安备 32011302320662号</p></a>
            </div>

        </div>
        <div class="code-btn" :class="isShowCodeReviewer?'show-code':''" @click="btnToggleCode()">Code</div>
        <div v-if="htmlContentForMd" class="code-reviewer-container" :class="isShowCodeReviewer?'show':'hidden'">
            <span class="code-reviewer-copy-btn" @click="btnCopyCode"></span>
            <div class="code-reviewer">
                <mavon-editor v-model="htmlContentForMd" :defaultOpen="'preview'" :editable="false" :toolbarsFlag="false"
                              :subfield="false" codeStyle="paraiso-dark"/>
            </div>
            <div class="code-reviewer-overlay"></div>
        </div>
    </div>
</template>

<script>
import routes from '@/router/routes';
import CommonsUtil from '@/libs/utils/commons.util';

export default {
    data() {
        return {
            currentRouteName  : '',
            htmlContent       : '',
            htmlContentForMd  : '',
            isShowCodeReviewer: false,
            routes            : routes
        };
    },
    watch: {
        $route(v) {
            const that = this;
            CommonsUtil.debounce('routeChange', () => {
                that.htmlContent = '';
                that.htmlContentForMd = '';

                that.currentRouteName = that.$route.name || '';
                const routeName = that.$route.name;
                if (routeName) {
                    const fileName = that._parseRouteNameToFileName(routeName);
                    window.$http.get(fileName).then(res => {
                        that.htmlContent = res.data;
                        that.htmlContentForMd = '```html\n' + res.data + '```';
                    });
                }
            }, 300, true);
        }
    },
    mounted() {
    },

    methods: {
        btnGotoRoute(route = {}) {
            this.isShowCodeReviewer = false;
            if (route && route.path) {
                this.currentRouteName = route.name;
                this.$router.push(route.path);
            }
        },
        btnToggleCode() {
            this.isShowCodeReviewer = !this.isShowCodeReviewer;
        },
        btnCopyCode() {
            this.$clipboard(this.htmlContent);
        },
        _parseRouteNameToFileName(routeName) {
            return `/template-component/${routeName}.vue`;
        }
    }
};

</script>


<style scoped lang="less">

.main {
    display   : flex;
    flex-flow : column nowrap;
    height    : 100vh;
    overflow  : hidden;
    position  : relative;

    .code-btn {
        position      : absolute;
        z-index       : 99;
        top           : 80px;
        right         : 20px;
        font-size     : 24px;
        font-weight   : 800;
        border        : #42b983 solid 2px;
        border-radius : 10px;
        color         : #42b983;
        padding       : 5px 10px;
        cursor        : pointer;
        user-select   : none;

        &:hover {
            color : #348f66;
        }

        &:active,
        &.show-code {
            color      : #e2e2e2;
            background : #42b983;
        }
    }

    .code-reviewer-container {
        position            : absolute;
        z-index             : 99;
        top                 : 150px;
        right               : 0px;
        bottom              : 0;
        width               : 650px;
        overflow            : hidden;
        transform           : translateX(650px);
        transition-duration : 0.6s;
        opacity             : 0;

        &.show {
            transform : translateX(0px);
            opacity   : 1;
        }
    }

    .code-reviewer {
        overflow-y : scroll;
        overflow-x : auto;
        z-index    : 10;
        margin     : 20px;
    }

    .code-reviewer-overlay {
        box-shadow     : 5px 5px 10px 0 #31465a;
        background     : #15212cec;
        border         : 1px solid #42b983;
        z-index        : 9;
        pointer-events : none;
    }

    .code-reviewer,
    .code-reviewer-overlay {
        position      : absolute;
        top           : 0px;
        right         : 10px;
        bottom        : 30px;
        width         : 600px;
        border-radius : 15px;
        padding       : 15px;
    }

    .code-reviewer-copy-btn {
        display       : block;
        position      : absolute;
        top           : 15px;
        left          : 30px;
        width         : 80px;
        z-index       : 11;
        font-size     : 16px;
        padding       : 5px;
        color         : #cacaca;
        background    : #42b983d5;
        border        : none;
        border-radius : 10px;
        user-select   : none;
        cursor        : pointer;
        opacity       : 0.8;

        &::before {
            content    : "copy";
            text-align : center;
        }

        &:hover {
            background : #42b983d5;
            opacity    : 1;
        }

        &:active {
            background : #42b983;

            &::before {
                font-size : 12px;
                content   : "completion";
            }
        }
    }
}

.main__header {
    height          : 60px;
    font-size       : 36px;
    font-weight     : 800;
    color           : #42b983;

    display         : flex;
    align-items     : center;
    justify-content : center;
    flex-shrink     : 0;

    user-select     : none;
}

.main__container {
    display   : flex;
    flex-flow : row nowrap;
    flex-grow : 1;
    overflow  : auto;

    .main__nav {
        width       : 300px;
        overflow    : auto;
        padding     : 10px;
        flex-shrink : 0;
        display     : flex;
        flex-flow   : column nowrap;
        text-align  : left;
        background  : #4b4b4b;

        .nav-btn {
            flex-shrink : 0;
            font-weight : bold;
            color       : #cacaca;
            padding     : 5px;
            cursor      : pointer;
            display     : flex;
            align-items : center;

            &:hover {
                color : #348f66;
            }

            &.selected {
                color : #42b983;
            }

            .nav__name {
                flex-grow : 1;
                padding   : 5px;
            }

            .nav__icon {
                width       : 50px;
                height      : 50px;
                flex-shrink : 0;
                padding     : 5px;

                .icon {
                    max-width  : 100%;
                    max-height : 100%;
                }
            }
        }
    }

    .main__viewer {
        position   : relative;
        flex-grow  : 1;
        background : #e2e2e2;
        overflow   : hidden;
    }
}

.main__footer {
    flex-shrink : 0;

    > div {
        font-size : 12px;
        color     : #4980b7;
        padding   : 3px 0;

        > * {
            padding : 0 5px;

            &:not(:first-child) {
                border-left : 1px solid #4980b7;

            }
        }
    }
}

</style>
