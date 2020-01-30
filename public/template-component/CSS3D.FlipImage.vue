<template>
  <div class="root">
    <section>
      <div class="card">
        <div class="imgBox">
          <span class="img"></span>
        </div>
        <div class="details">
          <h3>Designer</h3>
          <p>A designer is a person who makes designs for objects. A fashion designer designs clothing, a web designer designs web pages, and an automobile designer designs automobiles. In each case, the designer works with the help of a technician or engineer who understands deeper level concepts of manufacturing and engineering, and the designer themself is largely confined to work at a surface level.</p>
        </div>
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
  background: radial-gradient(#753820, #5f1c1c);
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 400px;
  background: #fff;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) perspective(2000px);
  box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.5),
    0 20px 100px rgba(0, 0, 0, 0.5);
  transition: 1s cubic-bezier(0.15, 1.7, 0.84, 0.58);
}

.card:hover {
  transform: translate(-50%, -50%) perspective(2000px) rotate(-10deg);
  box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.5),
    0 10px 100px rgba(0, 0, 0, 0.5);
}

.card::before {
  content: "";
  position: absolute;
  top: -5px;
  left: 0;
  width: 100%;
  height: 5px;
  background: #8a4d35;
  transform-origin: bottom;
  transform: skew(-45deg);
}

.card::after {
  content: "";
  position: absolute;
  top: 0;
  right: -5px;
  width: 5px;
  height: 100%;
  background: #96644b;
  transform-origin: left;
  transform: skewY(-45deg);
}

.card .imgBox {
  width: 100%;
  height: 100%;
  position: relative;
  transform-origin: left;
  transition: 1s;
  overflow: hidden;
}

.card:hover .imgBox {
  transform: rotateY(-135deg);
}

.card .imgBox .img {
  display: block;
  background: url("../../src/assets/img/ssyernocopyright34.jpg") no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
}

.card .details {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 20px;
  z-index: -1;
}

.card .details h3 {
  font-family: "Ultra", sans-serif;
}
</style>

