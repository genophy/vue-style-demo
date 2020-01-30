<template>
    <section>
        <div class="circle circle1">
            <img src="../../src/assets/img/ssyernocopyright10.jpg" alt="">
        </div>
        <div class="circle circle2">
            <img src="../../src/assets/img/ssyernocopyright12.jpg" alt="">
        </div>
        <div>
            <h2>Wrap Text Around Circle #2</h2>
            <p>A designer is a person who makes designs for objects. A fashion designer designs clothing, a web designer designs web pages, and an automobile designer designs automobiles. In each
                case, the designer works with the help of a technician or engineer who understands deeper level concepts of manufacturing and engineering, and the designer themself is largely confined
                to work at a surface level.</p>
            <p>A designer is a person who makes designs for objects. A fashion designer designs clothing, a web designer designs web pages, and an automobile designer
                designs automobiles. In each
                case, the designer works with the help of a technician or engineer who understands deeper level concepts of manufacturing and engineering, and the designer themself is largely confined
                to work at a surface level.</p>
            <p>A designer is a person who makes designs for objects. A fashion designer designs clothing, a web designer designs web pages, and an automobile designer
                designs automobiles. In each
                case, the designer works with the help of a technician or engineer who understands deeper level concepts of manufacturing and engineering, and the designer themself is largely confined
                to work at a surface level.</p>
            <p>A designer is a person who makes designs for objects. A fashion designer designs clothing, a web designer designs web pages, and an automobile designer
                designs automobiles. In each
                case, the designer works with the help of a technician or engineer who understands deeper level concepts of manufacturing and engineering, and the designer themself is largely confined
                to work at a surface level.</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CSS.WrapTextCircle'
};
</script>

<style scoped>
section {
    margin      : 0;
    position    : relative;;
    width       : 100%;
    height      : 100%;
    padding     : 50px;
    box-sizing  : border-box;
    font-family : "Avenir", Helvetica, Arial, sans-serif;
    background  : #000000;

}

.circle {
    position : relative;
    overflow : hidden;
}

.circle img {
    position   : absolute;
    top        : 0;
    left       : 0;
    width      : 100%;
    height     : 100%;
    object-fit : cover;
}

.circle.circle1 {
    width         : 500px;
    height        : 500px;
    float         : left;
    border-radius : 50%;
    margin        : 20px;
    shape-outside : circle();
}

.circle.circle2 {
    width         : 300px;
    height        : 300px;
    float         : right;
    border-radius : 50%;
    margin        : 20px;
    shape-outside : circle();
}

section h2 {
    color         : #ffffff;
    font-size     : 2rem;
    margin-bottom : 20px;
}

section p {
    color : #ffffff;
}

</style>