<template>
  <div class="root">
    <div class="card">
      <div class="image">
        <span class="img"></span>
      </div>
      <div class="details">
        <div class="center">
          <h1>
            Someone Famous
            <br>
            <span>Team Leader</span>
          </h1>
          <p>Ce style est extrait du réseau.Ça a l 'air bien, alors je l' ai copié pour continuer à partager.Si tu veux, tu peux aller sur Internet pour chercher d 'autres œuvres.</p>
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
  width: 360px;
  height: 480px;
  background: #000;
}

.card .image {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.card .image .img {
  display: block;
  background: url("../../src/assets/img/ssyernocopyright12.jpg") no-repeat;
  background-size: auto 100%;
  background-position-x: -120px;
  height: 100%;
  transition: 0.5s;
}

.card:hover .image .img {
  opacity: 0.5;
  transform: translateX(30%);
}

.card .details {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  background: #ffc107;
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
}

.card:hover .details {
  transform: perspective(2000px) rotateY(0deg);
}

.card .details .center {
  padding: 20px;
  text-align: center;
  background: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.card .details .center h1 {
  margin: 0;
  padding: 0;
  color: #ff3636;
  line-height: 20px;
  font-family: 'Aclonica',sans-serif;;
  font-size: 20px;
  text-transform: uppercase;
}

.card .details .center h1 span {
  font-size: 14px;
  color: #262626;
}

.card .details .center p {
  margin: 10px 0;
  padding: 0;
  color: #262626;
  font-family: 'Orbitron',sans-serif;
  font-size: 12px; 
}

.card .details .center ul {
  margin: 10px auto 0;
  padding: 0;
  display: table;
}

.card .details .center ul li {
  list-style: none;
  margin: 0 5px;
  float: left;
}

.card .details .center ul li a {
  display: block;
  background: #262626;
  color: #fff;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  transition: 0.5s;
}

.card .details .center ul li a:hover {
  background: #ff3636;
}
</style>
