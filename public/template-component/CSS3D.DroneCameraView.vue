<template>
  <div class="root">
    <div class="box">
      <div class="square">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #222222;
}

.box {
  position: absolute;
  top: 25%;
  left: 25%;
  transform: perspective(500px) rotateX(60deg);
}

.square {
  position: absolute;
  width: 1800px;
  height: 1800px;
  background: transparent;
  border: 100px solid #000;
  transform-style: preserve-3d;
  box-sizing: border-box;
  box-shadow: 0 0 0 5px #fff, inset 0 0 0 5px #fff;
  animation: rotate 40s linear infinite;
}

.square::before {
  content: "";
  position: absolute;
  top: -53px;
  left: -53px;
  bottom: -53px;
  right: -53px;
  border: 6px dashed #fff;
}

@keyframes rotate {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.square span {
  position: absolute;
  display: block;
  transform: scale(0); 
  width: calc(100% + 150px);
  height: 8px;
}

.square span:nth-child(1) {
  top: -80px;
  left: -75px;
  width: 8px;
  height: calc(100% + 150px);
  background: linear-gradient(180deg, #ff0, #f00);
  animation: animate-odd 40s linear infinite;
  animation-delay: 30s;
  transform-origin: bottom;
}

.square span:nth-child(3) {
  top: -80px;
  left: initial;
  right: -75px;
  width: 8px;
  height: calc(100% + 150px);
  background: linear-gradient(0deg, #ff0, #f00);
  animation: animate-odd 40s linear infinite;
  animation-delay: 10s;
  transform-origin: top;
}

@keyframes animate-odd {
  0%,
  75%,
  100% {
    transform: scaleY(0);
  }
  25%,
  50% {
    transform: scaleY(1);
  }
}

.square span:nth-child(2) {
  top: -80px;
  left: -75px;
  background: linear-gradient(90deg, #ff0, #f00);
  animation: animate-even 40s linear infinite;
  transform-origin: left;
}

.square span:nth-child(4) {
  top: initial;
  bottom: -78px;
  left: -75px;
  background: linear-gradient(270deg, #ff0, #f00);
  animation: animate-even 40s linear infinite;
  transform-origin: right;
  animation-delay: 20s;
}

@keyframes animate-even {
  0%,
  75%,
  100% {
    transform: scaleX(0);
  }
  25%,
  50% {
    transform: scaleX(1);
  }
}
</style>

