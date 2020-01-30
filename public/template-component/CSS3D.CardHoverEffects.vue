<template>
  <div class="root">
    <div class="card">
      <div class="imgBox">
        <span class="img"></span>
      </div>
      <div class="details">
        <div class="content">
          <h3>
            Someone Famous
            <br>
            <span>CEO And Founder</span>
          </h3>
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-google-plus-g" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  background: #262626;
}

.card .imgBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: bottom;
  transition: 0.5s;
  transform: translateY(0) rotateX(0deg);
}
.card:hover .imgBox {
  transform: translateY(-100%) rotateX(90deg);
}
.card .imgBox .img {
  display: block;
  background: url("../../src/assets/img/ssyernocopyright12.jpg") no-repeat;
  background-size: auto 100%;
  background-position-x: -120px;
  width: 300px;
  height: 400px;
  transition: 0.5s;
}

.card .details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #262626;
  transform-origin: top;
  transition: 0.5s;
  box-sizing: border-box;
  padding: 2px;
  text-align: center;
  transform: translateY(100%) rotateX(-90deg);
}

.card:hover .details {
  transform: translateY(0) rotateX(0deg);
}

.card .details .content {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
}

.card .details .content h3 {
  color: #fff;
  text-transform: uppercase;
}

.card .details .content h3 span {
  font-size: 14px;
  color: #ff0;
  text-transform: initial;
}

.card .details .content ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.card .details .content ul li {
  list-style: none;
}

.card .details .content ul li a {
  width: 36px;
  height: 36px;
  color: #262626;
  background: #fff;
  display: block;
  text-align: center;
  line-height: 36px;
  transition: 0.5s;
  cursor: pointer;
}

.card .details .content ul li a:hover {
  color: #fff;
  background: #00bcd4;
}
</style>

