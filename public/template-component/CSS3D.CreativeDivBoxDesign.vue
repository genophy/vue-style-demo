<template>
    <div class="root">
        <div class="box">
            <h3>Designer</h3>
            <p>
               A designer is a person who makes designs for objects. A fashion designer designs clothing, a web designer designs web pages, and an automobile designer designs automobiles. In each case, the designer works with the help of a technician or engineer who understands deeper level concepts of manufacturing and engineering, and the designer themself is largely confined to work at a surface level.
            </p>
        </div>
    </div>
</template>
<style scoped>
.root {
    font-family:  'Allerta Stencil',sans-serif;
}
.box {
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%) skewY(-10deg);
    width:400px;
    height:400px;
    background: #fff;
    box-shadow: -10px 5px 30px rgba(0,0,0,.5);
    box-sizing: border-box;
    transition: .5s; 
}

.box::before{
    content: '';
    position: absolute;
    top:0;
    left:-25px;
    width:25px;
    height: 100%;
    background: #d6d6d6;
    transform-origin: right bottom;
    transform: skewY(45deg);
}

.box::after{
    content: '';
    position: absolute;
    top:-25px;
    left:0;
    width:100%;
    height: 25px;
    background: #efefef;
    transform-origin:  bottom left;
    transform: skewX(45deg);
}

.box h3 {
    position: relative;
    background: #169fff;
    color:#fff;
    text-align: center;
    padding:5px 0;
    font-size: 36px;
    text-transform: uppercase;
    text-shadow: -2px 2px 10px rgba(0,0,0,.5);
}
.box h3::before {
    content: '';
    position: absolute;
    top: 0;
    left:-25px;
    width:25px;
    height:100%;
    background: #085a93;
    transform-origin: top right;
    transform: skewY(45deg);
}
.box p {
    padding:0 20px ;
    color: #444;
}
</style>

