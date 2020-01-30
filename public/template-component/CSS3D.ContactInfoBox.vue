<template>
  <div class="root">
    <div class="container">
      <div class="box">
        <div class="icon">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </div>
        <div class="details">
          <h3>China</h3>
        </div>
      </div>
      <div class="box">
        <div class="icon">
          <i class="fa fa-phone" aria-hidden="true"></i>
        </div>
        <div class="details">
          <h3>+86 123 456 7890</h3>
        </div>
      </div>
      <div class="box">
        <div class="icon">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </div>
        <div class="details">
          <h3>demo@github.com</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* @import url(https://use.fontawesome.com/releases/v5.8.1/css/all.css); */

.container {
  width: 800px;
  margin: 350px auto 0;
  display: flex;
}
.container .box {
  position: relative;
  width: 300px;
  height: 100px;
  box-sizing: border-box;
  text-align: center;
  margin: 0 10px;
}

.container .box .icon {
  width: 100%;
  height: 100%;
  background: #151515;
  transition: 0.5s;
  transform-origin: top;
  transform: translateY(0px) rotateX(0deg);
}

.container .box:hover .icon {
  transform: translateY(100%) rotateX(90deg);
}
.container .box .icon .fa {
  font-size: 4em;
  line-height: 100px;
  color: #999;
}
.container .box .details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #03a9f4;
  transition: 0.5s;
  transform-origin: bottom;
  transform: translateY(-100px) rotateX(0deg);
}
.container .box .details h3 {
  margin: 0;
  padding: 0;
  line-height: 100px;
  font-size: 24px;
  color: #fff;
  font-family: sans-serif;
}
.container .box:nth-child(2) .details {
  background: #e91e63;
}
.container .box:nth-child(3) .details {
  background: #8bc34a;
}
</style>
