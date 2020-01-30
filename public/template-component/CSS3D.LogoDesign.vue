<template>
  <div class="root">
    <div class="logo"></div>
  </div>
</template>
<style scoped>
.logo {
  position: absolute;
  top: 20%;
  left: 60%;
  width: 400px;
  height: 400px;
  background: url("../../src/assets/img/ssyernocopyright16.jpg") no-repeat;
  background-size: cover;
  transform: perspective(1000px) rotate(-30deg) skew(25deg)
    translate(-50%, -50%);
  box-shadow: -80px 80px 80px rgba(0, 0, 0, 0.5);
}

.logo::before {
  content: "";
  position: absolute;
  top: 13px;
  left: -25px;
  width: 25px;
  height: 100%;
  background: #262626;
  transform: rotate(0deg) skewY(-45deg);
}

.logo::after {
  content: "";
  position: absolute;
  bottom: -25px;
  left: -13px;
  width: 100%;
  height: 25px;
  background: #262626;
  transform: rotate(0deg) skewX(-45deg);
}
</style>

