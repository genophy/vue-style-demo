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
    <div class="root" ref="root">

    </div>
</template>

<script>

export default {
    name    : 'CSS.ColorfulHeartsTrailAnimation',
    props   : {},
    data() {
        return {};
    },
    computed: {},
    created() {
    },
    mounted() {
        this.$refs.root.addEventListener('mousemove', (e) => {
            const heart = document.createElement('span');

            const x = e.offsetX;
            const y = e.offsetY;
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            const size = Math.random() * 50;
            heart.style.width = heart.style.height = `${size + 20}px`;
            this.$refs.root.append(heart);
            setTimeout(() => {
                heart.remove();
            }, 2000);
        });
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
    position : relative;
    height   : 100%;
}

.root /deep/ span {
    position        : absolute;
    display         : block;
    background      : url('../../src/assets/img/heart.png');
    background-size : cover;
    width           : 100%;
    height          : 100%;
    pointer-events  : none;
    transform       : translate(-50%, -50%);
    animation       : animate 2s linear infinite;
}

@keyframes animate {
    0% {
        transform : translate(-50%, -50%);
        opacity   : 1;
        filter    : hue-rotate(0deg);
    }
    100% {
        transform : translate(-50%, -1000%);
        opacity   : 0;
        filter    : hue-rotate(720deg);
    }
}
</style>
