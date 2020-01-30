<template>
  <div class="root">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<style scoped>
ul {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 640px;
  height: 360px;
  display: flex;
}

ul li {
  list-style: none;
  width: 25%;
  height: 100%;
  transition: 0.5s;
  background-size: 640px 360px;
}

ul li:nth-child(1) {
  background: url("../../src/assets/img/ssyernocopyright26.jpg") no-repeat;
  background-size: 640px 360px;
}

ul li:nth-child(2) {
  background: url("../../src/assets/img/ssyernocopyright26.jpg") no-repeat;
  background-size: 640px 360px;
  background-position-x: -160px;
}

ul li:nth-child(3) {
  background: url("../../src/assets/img/ssyernocopyright26.jpg") no-repeat;
  background-size: 640px 360px;
  background-position-x: -320px;
}

ul li:nth-child(4) {
  background: url("../../src/assets/img/ssyernocopyright26.jpg") no-repeat;
  background-size: 640px 360px;
  background-position-x: -480px;
}

ul:hover li:nth-child(odd) {
  transform: skewY(15deg);
  box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.2);
}

ul:hover li:nth-child(even) {
  transform: skewY(-15deg);
  box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.2);
}
</style>

