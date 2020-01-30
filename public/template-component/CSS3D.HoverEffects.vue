<template>
    <div class="root">

        <div class="center" >
            <div class="box">

            </div>
        </div>

    </div>
</template>

<style scoped>
.center {
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    perspective: 1000px;

}

.box {
    width: 300px;
    height:400px;
    background: #fff url('../../src/assets/img/ssyernocopyright22.jpg') no-repeat ;
    background-size: 80%;
    background-position: center;
    transform: rotateX(70deg);
    transform-style: preserve-3d;
    transition: .5s;
}

.box::before {
    content: '';
    width:100%;
    height: 50px;
    position: absolute;
    left:0;
    bottom: 0;
    background: #ccc;
    transform-origin: bottom;
    transform:rotateX(90deg)
}
.box:hover {
    transform: rotateX(25deg);
}
</style>

