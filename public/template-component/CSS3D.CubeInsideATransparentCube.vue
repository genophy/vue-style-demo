<template>
  <div class="root">
    <div class="cube">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<style scoped>
.cube {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transform: translate(-100%, -100%);
}

.cube span {
  position: absolute;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: #ff0;
  transform-style: preserve-3d;
}
.cube span::before {
  content: "";
  position: absolute;
  width: 150px;
  height: 150px;
  background: #fff;
}

.cube span::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  background: #fff;
  transition: 1s;
  opacity: 0;
}

.cube:hover span::after {
  opacity: 1;
}

.cube span:nth-child(1) {
  left: 50%;
  transform: rotate(-45deg) skew(15deg, 15deg);
  background: rgba(141, 100, 249, 0.5);
}

.cube span:nth-child(1)::before {
  bottom: 0;
  left: 0;
  background: rgba(176, 135, 214, 0.5);
}

.cube span:nth-child(1)::after {
  bottom: 0;
  left: 0;
  background: url('../../src/assets/img/ssyernocopyright10.jpg') no-repeat;
  background-size:cover;
  
}

.cube span:nth-child(2) {
  top: 155px;
  left: 10px;
  transform: rotate(15deg) skew(15deg, 15deg);
  background: rgba(176, 124, 211, 0.5);
}

.cube span:nth-child(2)::before {
  top: 0;
  right: 0;
  background: rgba(191, 123, 211, 0.5);
}

.cube span:nth-child(2)::after {
  top: 0;
  right: 0;
  background: url('../../src/assets/img/ssyernocopyright10.jpg') no-repeat;
  background-size: cover;
}

.cube span:nth-child(3) {
  top: 155px;
  left: 189px;
  transform: rotate(-15deg) skew(-15deg, -15deg);
  background: rgba(152, 111, 188, 0.5);
}

.cube span:nth-child(3)::before {
  top: 0;
  left: 0;
  background: rgba(152, 111, 188, 0.5);
}

.cube span:nth-child(3)::after {
  top: 0;
  left: 0;
  background: url('../../src/assets/img/ssyernocopyright10.jpg') no-repeat;
  background-size: cover;
}
</style>

