<template>
  <div class="root">
    <div class="box">
      <a href="#">Button</a>
    </div>
  </div>
</template>

<style scoped>
a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: perspective(1000px) translate(-50%, -50%);
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background: #ff0360;
  color: #fff;
  font-family: sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 30px;
  letter-spacing: 1px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  transform-origin: center;
}

a:hover {
  animation: animateButton 3s ease-in infinite;
}

@keyframes animateButton {
  0% {
    transform: perspective(1000px) translate(-50%, -50%) rotateX(35deg);
  }
  50% {
    transform: perspective(1000px) translate(-50%, -50%) rotateX(-35deg);
  }
  100% {
    transform: perspective(1000px) translate(-50%, -50%) rotateX(35deg);
  }
}

a::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 30%;
  background: #b7003e;
  transform-origin: top center;
  transform: perspective(1000px) rotateX(-90deg);
  backface-visibility: hidden;
}

a:hover::before {
  animation: animateBefore 3s ease-in-out infinite;
}

@keyframes animateBefore {
  0% {
    transform: perspective(1000px) rotateX(-70deg);
  }
  50% {
    transform: perspective(1000px) rotateX(-120deg);
  }
  100% {
    transform: perspective(1000px) rotateX(-70deg);
  }
}

a::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: #b7003e;
  transform-origin: top center;
  transform: perspective(1000px) rotateX(-90deg);
}

a:hover::after {
  animation: animateAfter 3s ease-in-out infinite;
}

@keyframes animateAfter {
  0% {
    transform: perspective(1000px) rotateX(-90deg);
  }
  50% {
    transform: perspective(1000px) rotateX(-110deg);
  }
  100% {
    transform: perspective(1000px) rotateX(-90deg);
  }
}
</style>

