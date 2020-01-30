<template>
  <div class="root">
    <div class="box">
      <h3>Designer</h3>
      <p>A designer is a person who makes designs for objects. A fashion designer designs clothing, a web designer designs web pages, and an automobile designer designs automobiles. In each case, the designer works with the help of a technician or engineer who understands deeper level concepts of manufacturing and engineering, and the designer themself is largely confined to work at a surface level.</p>
    </div>
  </div>
</template>

<style scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(#5e5e5e, #444);
  box-sizing: border-box;
  border-radius: 10px;
}
.box h3 {
  position: relative;
  left: -15px;
  color: #fff;
  font-family: "Germania One", sans-serif;
  text-align: center;
  background: #169fff;
  margin: 40px 0 0;
  padding: 5px 0;
  font-size: 36px;
  text-transform: uppercase;
  width: 430px;
  text-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}

.box h3::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 100%;
  background: #085a93;
  transform-origin: top left;
  transform: skewY(-50deg);
  transition: transform 0.5s;
  z-index: -1;
}

.box:hover h3::before {
  transform: skewY(50deg);
}

.box h3::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 15px;
  height: 100%;
  background: #085a93;
  transform-origin: top right;
  transform: skewY(-50deg);
  transition: transform 0.5s;
  z-index: -1;
}

.box:hover h3::after {
  transform: skewY(50deg);
}

.box p {
  padding: 0 20px;
  color: #fff;
  font-family: "Timmana", sans-serif;
  text-align: center;
}
</style>

