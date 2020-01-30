<template>
  <div class="root">
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
</template>
<style scoped>
ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  display: flex;
}

ul li {
  list-style: none;
  margin: 0 40px;
}

ul li a .fab {
  font-size: 40px;
  color: #262626;
  line-height: 80px;
  transition: 0.5s;
}

ul li a {
  position: relative;
  display: block;
  width: 80px;
  height: 80px;
  background: #fff;
  text-align: center;
  transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0);
  transition: 0.5s;
  box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
}
ul li a::before {
  content: "";
  position: absolute;
  top: 10px;
  left: -20px;
  height: 100%;
  width: 20px;
  background: #b1b1b1;
  transition: 0.5s;
  transform: rotate(0deg) skewY(-45deg);
}
ul li a::after {
  content: "";
  position: absolute;
  bottom: -20px;
  left: -10px;
  height: 20px;
  width: 100%;
  background: #b1b1b1;
  transition: 0.5s;
  transform: rotate(0deg) skewX(-45deg);
}

ul li a:hover {
  transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(20px,-20px);
  box-shadow: -50px 50px 10px rgba(0, 0, 0, .5);
}
ul li:hover .fab {
  color:#fff;
}
ul li:hover:nth-child(1) a {
  background: #3b5999;
}

ul li:hover:nth-child(1) a::before {
  background: #1b366e;
}

ul li:hover:nth-child(1) a::after {
  background: #162a53;
}

ul li:hover:nth-child(2) a {
  background: #55acee;
}

ul li:hover:nth-child(2) a::before {
  background: #3472a1;
}

ul li:hover:nth-child(2) a::after {
  background: #205279;
}


ul li:hover:nth-child(3) a {
  background: #dd4b39;
}
ul li:hover:nth-child(3) a::before {
  background: #a53728;
}

ul li:hover:nth-child(3) a::after {
  background: #7a2317;
}



ul li:hover:nth-child(4) a {
  background: #0077B5;
}
ul li:hover:nth-child(4) a::before {
  background: #005685;
}
ul li:hover:nth-child(4) a::after {
  background: #003c5c;
}
ul li:hover:nth-child(5) a {
  background: #e4405f;
}

ul li:hover:nth-child(5) a::before {
  background: #9c2d41;
}
ul li:hover:nth-child(5) a::after {
  background: #6d1f2d;
}

</style>
