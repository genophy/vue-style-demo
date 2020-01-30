<template>
  <div class="root">
    <div class="container">
      <span class="img"></span>
      <span class="img"></span>
      <span class="img"></span>
      <span class="img"></span>
    </div>
  </div>
</template>
<style scoped>
.root {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.container {
  position: relative;
  width: 360px;
  height: 640px;
  margin-top: 150px;
  background: rgba(0, 0, 0, 0.1);
  transform: rotate(-30deg) skewX(25deg) scale(0.8);
  transition: 0.5s;
}

.container .img {
  background: url(../../src/assets/img/ssyernocopyright32.jpg) no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: 0.5s;
}

.container:hover .img:nth-child(4) {
  transform: translate(160px, -160px);
  opacity: 1;
}

.container:hover .img:nth-child(3) {
  transform: translate(120px, -120px);
  opacity: 0.8;
}
.container:hover .img:nth-child(2) {
  transform: translate(80px, -80px);
  opacity: 0.6;
}

.container:hover .img:nth-child(1) {
  transform: translate(40px, -40px);
  opacity: 0.4;
}
</style>

