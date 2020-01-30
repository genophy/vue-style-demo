<template>
  <div class="root">
    <div class="box">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
  </div>
</template>
<style scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 480px;
  transform: translate(-50%, -50%);
}
.card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../../src/assets/img/ssyernocopyright30.jpg");
  background-size: cover;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  transform-origin: bottom;
  border-radius: 10px;
}

.box .card:nth-child(1) {
  transform: translate(0, 0);
}

.box .card:nth-child(2) {
  transform: translate(2px, 2px);
}

.box .card:nth-child(3) {
  transform: translate(4px, 4px);
}

.box .card:nth-child(4) {
  transform: translate(6px, 6px);
}

.box .card:nth-child(5) {
  transform: translate(8px, 8px);
}

.box .card:nth-child(6) {
  transform: translate(10px, 10px);
}

.box .card:nth-child(7) {
  transform: translate(12px, 12px);
}

.box:hover .card:nth-child(1) {
  transform: rotate(-45deg) translate(0, 0);
}
.box:hover .card:nth-child(2) {
  transform: rotate(-30deg) translate(0, 0);
}
.box:hover .card:nth-child(3) {
  transform: rotate(-15deg) translate(0, 0);
}
.box:hover .card:nth-child(4) {
  transform: rotate(0deg) translate(0, 0);
}
.box:hover .card:nth-child(5) {
  transform: rotate(15deg) translate(0, 0);
}
.box:hover .card:nth-child(6) {
  transform: rotate(30deg) translate(0, 0);
}
.box:hover .card:nth-child(7) {
  transform: rotate(45deg) translate(0, 0);
}

.box .card:hover {
  /* z-index: 1;
    box-shadow: 0 20px 50px rgba(0,0,0,.5); */

  animation: animate .3s linear 1 forwards;
}

@keyframes animate {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
    z-index: 1;
  }

  100% {
    opacity: 1;
    z-index: 1;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  }
}

</style>
