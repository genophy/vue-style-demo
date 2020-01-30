<template>
  <div class="root">
    <div class="card">
      <input type="checkbox" name="">
      <div class="toggle">+</div>
      <div class="imgBox">
        <span class="img"></span>
      </div>
      <div class="details">
        <h2>Someone Famous</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidicunt ut labore et
          dolore
          magna aliqua.
        </p>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .root {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    display: flex;

    justify-content: center;
    align-items: center;
  }

  .card {
    position: relative;
    width: 300px;
    height: 400px;
    background: #262626;
    overflow: hidden;
  }

  input,
  .toggle {
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
    outline: none;
    z-index: 10;
  }

  input {
    opacity: 0;
  }

  .toggle {
    pointer-events: none;
    border-radius: 50%;
    background: #fff;
    transition: 0.5s;
    text-align: center;
    line-height: 50px;
    font-size: 36px;
    box-shadow: 0 0 0 0 #9c27b0;
  }

  input:checked~.toggle {
    box-shadow: 0 0 0 500px #9c27b0;
    transform: rotateZ(255deg);
  }



  .imgBox,
  .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .imgBox .img {
    display: block;
    width: 100%;
    height: 100%;
    background: url('../../src/assets/img/ssyernocopyright06.jpg') no-repeat;
    background-size: cover;
  }


  .details {
    padding: 20px;
    box-sizing: border-box;
    z-index: 11;
    pointer-events: none;
    transition: 0.5s;
    opacity: 0;
  }


  input:checked~.details {
    opacity: 1;
    transition-delay: 0.5s;
  }

  .details h2 {
    margin-bottom: 5px;
    color: #fff;
  }

  .details p {
    margin: 0;
    padding: 0;
    color: #fff;

  }

</style>
