<!--
    FileDesc  :
    Author    :  g_eno_phy
    Date      :  2020-01-28 14:30
    Version   :
    Usage     :
        - template
            <CSS.ClipPathScroll></CSS.ClipPathScroll>

        - props
            :hello-world        {String}        你好世界
        - event
            @on-value-changed   {String}        值改变
        - method
            changeValue         {String}        改变值
-->

<template>
    <div :id="id" class="root">
        <h2 class="title">Scroll To See Magic Again...</h2>
        <section :id="section"></section>
        <div class="container">
            <h2>Also Watch Part 1 and 2... Link in Video Description</h2>
            <p>A [designer is a person who makes designs for objects. A fashion designer designs clothing, a web designer designs web pages, and an automobile designer designs automobiles. In each
                case, the designer works with the help of a technician or engineer who understands deeper level concepts of manufacturing and engineering, and the designer themself is largely confined
                to work at a surface level.</p>
        </div>
    </div>
</template>

<script>

export default {
    name    : 'CSS.ClipPathScroll',
    props   : {},
    data() {
        return {
            id     : `clipPathScrollId${this.randomId}`,
            section: `clipPathScrollSection${this.randomId}`
        };
    },
    computed: {
        randomId() {
            return Math.floor(Math.random() * 1000);
        }
    },
    created() {
    },
    mounted() {
        const section = document.getElementById(this.section);
        document.getElementById(this.id).addEventListener('scroll', (event) => {
            const value = event.target.scrollTop;
            section.style.clipPath = `circle(${value}px at center)`;
        });

    },
    methods : {}
};
</script>
<style scoped>
.root {
    position    : relative;
    height      : 100%;
    margin      : 0;
    padding     : 0;
    box-sizing  : border-box;
    font-family : "Anton", sans-serif;
    overflow    : auto;
}

section {
    position              : fixed;
    top                   : 60px;
    left                  : 320px;
    right                 : 20px;
    bottom                : 50px;
    background            : url("../../src/assets/img/ssyernocopyright04.jpg");
    background-attachment : fixed;
    clip-path             : circle(100px at center);
    pointer-events        : none;
}

.container {
    position   : relative;
    margin-top : 200vh;
    /*background : #fff;*/
    padding    : 100px;
    box-sizing : border-box;
}

.container h2 {
    font-size     : 2.5em;
    margin-bottom : 20px;
}

.container p {
    line-height : 30px;

}

.title {
    position   : relative;
    top        : 250px;
    z-index    : 1;
    font-size  : 3em;
    text-align : center;
    width      : 100%;
}
</style>
