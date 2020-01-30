<template>
  <div class="root">
    <div class="fold"></div>
  </div>
</template>
<style scoped>

.fold {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) skewY(0deg) rotateY(0deg);
  width: 160px;
  height: 360px;
  background: url('../../src/assets/img/ssyernocopyright16.jpg') no-repeat;
  background-size: 540px 360px;
  background-position-x: -160px;
  border-top: 10px solid #ff6d3f;
  border-bottom: 10px solid #ff6d3f;
  box-sizing: border-box;
  transition: 1s;
}

.fold:hover{
  transform: translate(-50%, -50%) skewY(15deg) rotateY(3deg);
}

.fold::before {
  content: "";
  position: absolute;
  width: 80%;
  height: calc(100% + 20px);
  
  background: url('../../src/assets/img/ssyernocopyright16.jpg');
  background-size: 540px 360px;
  background-position-x:-40px ;
  position: absolute;
  top: -10px;
  left: -80%;
  border-top: 10px solid #ff8a65;
  border-bottom: 10px solid #ff8a65;
  border-left: 10px solid #ff8a65;
  box-sizing: border-box;
  transform: perspective(1000px) skewY(-25deg) rotateY(-90deg);
  transform-origin: right;
  box-shadow: inset -15px 0 15px rgba(0, 0, 0, 0.1);
  transition: 1s;
}

.fold:hover::before {
  transform: perspective(1000px) skewY(-25deg) rotateY(0deg);
}

.fold::after {
  content: "";
  width: 80%;
  height: calc(100% + 20px);
   background: url('../../src/assets/img/ssyernocopyright16.jpg');
  background-size: 540px 360px;
  background-position-x:-320px ;
  position: absolute;
  top: -10px;
  right: -80%;
  border-top: 10px solid #ff8a65;
  border-bottom: 10px solid #ff8a65;
  border-right: 10px solid #ff8a65;
  box-sizing: border-box;
  transform: perspective(1000px) skewY(-25deg) rotateY(90deg);
  transform-origin: left;
  box-shadow: inset 15px 0 15px rgba(0, 0, 0, 0.1);
  transition: 1s;
}


.fold:hover::after {
  transform: perspective(1000px) skewY(-25deg) rotateY(0deg);
}
</style>

