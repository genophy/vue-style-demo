<template>
  <div class="root">
    <div class="box">
      <div class="face face1">
        <span>Hello World</span>
      </div>
      <div class="face face2">
        <span>Hello World</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 150px;
}

.box .face {
  position: absolute;
  width: 500px;
  height: 150px;
  font-size: 6em;
  text-align: center;
  line-height: 150px;
  overflow: hidden;
}

.box .face span {
  width: 100%;
  height: 100%;
  display: block;
  transition: 0.5s;
}

.box .face.face1 {
  background: #d80045;
  color: #fff;
  transform-origin: left;
  left: 0;
  transform: perspective(800px) rotateY(-64.02deg);
}

.box .face.face2 {
  background: #f1004d;
  color: #fff;
  transform-origin: right;
  right: 0;
  transform: perspective(800px) rotateY(64.02deg);
}

.box .face.face1 span {
  position: absolute;
  animation: animate1 10s linear infinite;
}

@keyframes animate1 {
  0% {
    left: 200%;
  }
  100% {
    left: -100%;
  }
}

.box .face.face2 span {
  position: absolute;
  animation: animate2 10s linear infinite;
}

@keyframes animate2 {
  0% {
    left: 100%;
  }
  100% {
    left: -200%;
  }
}
</style>
