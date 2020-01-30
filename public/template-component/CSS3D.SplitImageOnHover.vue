<template>
  <div class="root">
    <div class="box">
      <div class="about">
        <h2>Split Image on Hover</h2>
        <p>Ce style est extrait du réseau.Ça a l 'air bien, alors je l' ai copié pour continuer à partager.Si tu veux, tu peux aller sur Internet pour chercher d 'autres œuvres.</p>
      </div>
      <div class="figure"></div>
    </div>
  </div>
</template>
<style scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 540px;
  height: 360px;
  background: #000;
}

.about {
  padding: 40px;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.about h2 {
  margin: 0;
  padding: 0;
  font-family: "Poiret One", sans-serif;
  font-size: 30px;
}

.figure {
  width: 100%;
  height: 100%;
}

.figure::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: url("../../src/assets/img/ssyernocopyright13.jpg");
  background-size: 540px 360px;
  transform-origin: bottom;
  transition: 0.5s;
}

.box:hover .figure::before {
  transform: rotateX(90deg) translateY(50%);
}

.figure::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: url("../../src/assets/img/ssyernocopyright13.jpg");
  background-size: 540px 360px;
  transform-origin: top;
  transition: 0.5s;
  background-position: 270px;
}

.box:hover .figure::after {
  transform: rotateX(90deg) translateY(-50%);
}
</style>
