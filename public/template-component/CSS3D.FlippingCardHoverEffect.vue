<template>
  <div class="root">
    <div class="card">
      <div class="front">
        <img src="../../src/assets/img/ssyernocopyright29.jpg" alt width="300" height="400">
      </div>
      <div class="back">
        <div class="details">
          <h2>
            Sunny
            <br>
            <span>Junior Designer</span>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fab fa-google-plus-g" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.root {
  font-family: "Orbitron", sans-serif;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  transform-style: preserve-3d;
  perspective: 600px;
  transform: 0.5s;
}
.card .front {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  backface-visibility: hidden;
  transform: rotateX(0deg);
  transition: 0.5s;
}
.card:hover .front {
  transform: rotateX(-180deg);
}
.card .back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  backface-visibility: hidden;
  transform: rotateX(180deg);
  transition: 0.5s;
  overflow: hidden;
}
.card .back::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
}
.card:hover .back {
  transform: rotateX(0deg);
}

.card .back .details {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}
.card .back .details h2 {
  margin: 0;
  padding: 0;
  font-size: 24px;
  color: #fff;
}
.card .back .details h2 span {
  color: #a7a7a7;
  font-size: 16px;
}

.social-icons {
  padding: 10px 0;
}

.social-icons a {
  display: inline-block;
  width: 36px;
  height: 36px;
  text-align: center;
  background: #262626;
  color: #fff;
  text-decoration: none;
  border-radius: 50%;
  transition: 0.5s;
}
.social-icons a .fab {
  line-height: 36px;
  font-size: 16px;
}

.social-icons a:hover {
  background: #e91e63;
}
</style>

