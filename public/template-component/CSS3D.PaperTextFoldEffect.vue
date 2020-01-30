<template>
  <div class="root">
    <section>
      <div class="center">
        <h1>
          <span>Text</span>
          <span>Text</span>
          <span>Text</span>
        </h1>
      </div>
    </section>
  </div>
</template>
<style scoped>
section {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(#b9164c, #4b0909);
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: perspective(1000px) translate(-50%, -50%) skewY(15deg);
  transition: 0.5s;
}

.center:hover {
  transform: perspective(1000px) translate(-50%, -50%) skewY(0deg);
}

.center h1 span {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: 12em;
  color: #fff;
  transition: 1s;
}

/* https://bennettfeely.com/clippy/ */

.center h1 span:nth-child(1) {
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
}

.center h1 span:nth-child(2) {
  color: #e81e63;
  transform: translate(-50%, -50%) skewX(-60deg);
  left: -38px;
  clip-path: polygon(0 45%, 100% 45%, 100% 55%, 0 55%);
}

.center h1 span:nth-child(3) {
  transform: translate(-50%, -50%) skewX(0deg);
  left: -76px;
  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
}

.center:hover h1 span:nth-child(2),
.center:hover h1 span:nth-child(3) {
  transform: translate(-50%, -50%) skewX(0deg);
  left: 0;
  color: #fff;
}
</style>

