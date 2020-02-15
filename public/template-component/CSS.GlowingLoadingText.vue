<!--
    FileDesc  :
    Author    :  g_eno_phy
    Date      :  2020-02-16 04:30
    Version   :
    Usage     :
        - template
            <CSS.GlowingLoadingText></CSS.GlowingLoadingText>

        - props
            :hello-world        {String}        你好世界
        - event
            @on-value-changed   {String}        值改变
        - method
            changeValue         {String}        改变值
-->

<template>
    <div class="root">
        <h2>
            <span v-for="(txt,idx) in 'Loading'" :key="idx">{{txt}}</span>
            <span>...</span>
        </h2>
    </div>
</template>

<script>
export default {
    name    : 'CSS.GlowingLoadingText',
    props   : {},
    data() {
        return {};
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    methods : {
        /* _____________________________________________________________________________________ */
        /* _____________________________________________________________________________________ */
        /* _____________________________________________________________________________________ */
        /* _____________________ [ handle ] ____________________________________________________ */

        /* _____________________________________________________________________________________ */
        /* _____________________________________________________________________________________ */
        /* _____________________________________________________________________________________ */
        /* _____________________ [ public ] ____________________________________________________ */

        /* _____________________________________________________________________________________ */
        /* _____________________________________________________________________________________ */
        /* _____________________________________________________________________________________ */
        /* _____________________ [ private: *,query,fetch,action,init ] ________________________ */

    }
};
</script>
<style scoped lang="less">
.root {
    font-family     : Consolas, serif;
    display         : flex;
    flex-flow       : row nowrap;
    justify-content : center;
    align-items     : center;
    height          : 100%;
}

h2 {
    color     : #000;
    font-size : 6em;
    display   : flex;
}

h2 span {
    animation : animate 4s linear infinite;
}

.loopSpan(@i) when (@i > 0) {
    h2 span:nth-child(@{i}) {
        animation-delay : @i * .1s;
    }
    .loopSpan(@i - 1)
}

.loopSpan(8);


@keyframes animate {
    0%, 100% {
        color       : #fff;
        filter      : blur(2px);
        text-shadow : 0 0 10px #00b3ff,
        0 0 20px #00b3ff,
        0 0 40px #00b3ff,
        0 0 80px #00b3ff,
        0 0 120px #00b3ff,
        0 0 200px #00b3ff,
        0 0 300px #00b3ff,
        0 0 400px #00b3ff;
    }
    25%, 75% {
        color       : #000;
        filter      : blur(0);
        text-shadow : none;
    }
}
</style>
