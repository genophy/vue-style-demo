<template>
  <div class="root">
    <a href="#">Button</a>
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
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    position: relative;
    padding: 8px 30px;
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 20px;
    border: 2px solid #000;
    box-sizing: border-box;
    transition: 0.5s;
  }

  a:hover {
    color: #fff;
  }

  a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 51%;
    background: #000;
    z-index: -1;
    transform: scaleX(0);
    transition: transform 0.5s;
    transform-origin: right;
  }

  a:hover::before {
    transform: scaleX(1);
    transition: transform 0.5s;
    transform-origin: right;
  }

  a::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 51%;
    background: #000;
    z-index: -1;
    transform: scaleX(0);
    transition: transform 0.5s;
    transform-origin: left;
  }

  a:hover::after {

    transform: scaleX(1);
    transition: transform 0.5s;
    transform-origin: left;
  }

</style>
