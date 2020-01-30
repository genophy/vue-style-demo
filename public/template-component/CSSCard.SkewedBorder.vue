<template>
  <div class="root">
    <div class="container">
      <div class="box">
        <div class="content">
          <h2>01</h2>
          <h3>Service One</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidicunt ut labore et
            dolore
            magna aliqua.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div class="box">
        <div class="content">
          <h2>02</h2>
          <h3>Service Two</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidicunt ut labore et
            dolore
            magna aliqua.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div class="box">
        <div class="content">
          <h2>03</h2>
          <h3>Service Three</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidicunt ut labore et
            dolore
            magna aliqua.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div class="box">
        <div class="content">
          <h2>04</h2>
          <h3>Service Four</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidicunt ut labore et
            dolore
            magna aliqua.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .root {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    display: flex;
    justify-content: center;
    background: #060c21;
    font-family: 'Anton', sans-serif;
    z-index: 0;
  }

  .container {
    position: relative;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-template-rows: auto;
    grid-gap: 40px;
  }

  .container .box {
    position: relative;
    height: 300px;
    margin: 50px 0;
    background: #060c21;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
  }

  .container .box::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    /* background: #fff; */
    transform: skew(2deg, 2deg);
    z-index: -1;
  }

  .container .box:nth-child(1)::before {
    background: linear-gradient(315deg, #ff0057, #e64a19);
  }

  .container .box:nth-child(2)::before {
    background: linear-gradient(315deg, #89ff00, #00bcd4);
  }

  .container .box:nth-child(3)::before {
    background: linear-gradient(315deg, #e91e63, #5d02ff);
  }

  .container .box:nth-child(4)::before {
    background: linear-gradient(315deg, #ff0009, #ffc107);
  }

  .container .box::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, .05);
    pointer-events: none;

  }

  .content {
    position: relative;
    padding: 20px;
    transform: translateY(20px);
  }

  .content h2 {
    position: absolute;
    top: -60px;
    right: 20px;
    margin: 0;
    padding: 0;
    font-size: 8em;

    color: rgba(255, 255, 255, .05);
    transition: 0.5s;
  }

  .box:hover .content h2 {
    top: -140px;
  }

  .box .content h3 {
    margin: 0 0 10px;
    padding: 0;
    font-size: 24px;
    font-weight: 500;
    color: #fff;
  }

  .box .content p {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 16px;
  }

  .box .content a {
    position: absolute;
    left: 0;
    margin: 20px;
    padding: 10px 20px;
    text-decoration: none;
    color: #fff;
    border: 1px solid #fff;
    transition: 0.5s;
    transform: translateY(-40px);
    opacity: 0;
    visibility: hidden;
  }

  .box:hover .content a {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .box .content a:hover {
    color: #000;
    background: #fff;
  }

</style>
