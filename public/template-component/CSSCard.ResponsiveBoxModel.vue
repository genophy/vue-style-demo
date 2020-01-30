<template>
  <div class="root">

    <div class="container">
      <div class="box">
        <div class="thumb">
          <img src="../../src/assets/img/ssyernocopyright01.jpg" alt="">
        </div>
        <div class="details">'
          <div class="content">
            <i class="fas fa-gift" aria-hidden="true"></i>
            <h3>Lorem</h3>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="thumb">
          <img src="../../src/assets/img/ssyernocopyright02.jpg" alt="">
        </div>
        <div class="details">'
          <div class="content">
            <i class="fas fa-globe" aria-hidden="true"></i>
            <h3>Lorem</h3>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="thumb">
          <img src="../../src/assets/img/ssyernocopyright04.jpg" alt="">
        </div>
        <div class="details">'
          <div class="content">
            <i class="fas fa-glasses" aria-hidden="true"></i>
            <h3>Lorem</h3>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="thumb">
          <img src="../../src/assets/img/ssyernocopyright07.jpg" alt="">
        </div>
        <div class="details">'
          <div class="content">
            <i class="fas fa-graduation-cap" aria-hidden="true"></i>
            <h3>Lorem</h3>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>



    </div>

  </div>
</template>

<style scoped>
  .root {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
    /* background: #20024a; */
  }


  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 500px;
    display: flex;

  }

  .container .box {
    position: relative;
    width: 250px;
    height: 500px;
    background: #ccc;
    transition: 0.5s;

  }

  .container .box:hover {
    transform: scale(1.1);
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 1);
  }

  .container .box .thumb {
    position: absolute;
    width: 100%;
    height: 250px;
    overflow: hidden;
  }

  .container .box:nth-child(odd) .thumb {
    bottom: 0;
    left: 0;
  }

  .container .box .thumb img {
    width: 100%;

  }


  .container .box .details {
    position: absolute;
    width: 100%;
    height: 250px;
    overflow: hidden;
    background: #262626;
  }


  .container .box:nth-child(even) .details {
    bottom: 0;
    left: 0;
  }

  .container .box:nth-child(1) .details {
    background: #8553cb;
  }


  .container .box:nth-child(2) .details {
    background: #fe8f01;
  }


  .container .box:nth-child(3) .details {
    background: #79d400;
  }

  .container .box:nth-child(4) .details {
    background: #ff3b34;
  }

  .container .box .details .content {
    position: absolute;
    top: calc(50% - 16px);
    transform: translateY(-50%);
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    transition: 0.5s;
  }

  .container .box:hover .details .content {
    top: calc(50%);
  }

  .container .box .details .content i {
    font-size: 80px;
    color: #fff;
  }

  .container .box .details .content h3 {
    margin: 0;
    padding: 10px 0;
    color: #fff;
  }

  .container .box .details .content a {
    display: inline-block;
    padding: 5px 20px;
    color: #fff;
    border: 2px solid #fff;
    text-decoration: none;
    transition: 0.5s;
    border-radius: 20px;
    transform: scale(0);
  }

  .container .box:hover .details .content a {
    transform: scale(1)
  }

  .container .box .details .content a:hover {
    background: #fff;
    color: #262626;
  }

</style>
