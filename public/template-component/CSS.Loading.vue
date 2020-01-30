<template>
    <div class="root">
        <div class="loader"></div>
    </div>

</template>

<script>
export default {
    name: 'CSS.Loading'
};
</script>

<style scoped>
* {
    margin  : 0;
    padding : 0;
}

.root {
    display     : flex;
    align-items : center;
    height      : 100%;
}

.loader {
    margin        : auto;
    position      : relative;
    width         : 200px;
    height        : 200px;
    border-radius : 50%;
    box-shadow    : 0 0 0 15px #0f0b1d;
}

.loader:before {
    content       : '';
    position      : absolute;
    top           : 0;
    left          : 0;
    right         : 0;
    bottom        : 0;
    background    : linear-gradient(45deg, #0b0f25 30%, #2196f3);
    border-radius : 50%;
    animation     : animate 1s linear infinite;
}

.loader:after {
    content       : '';
    position      : absolute;
    top           : 8px;
    left          : 8px;
    right         : 8px;
    bottom        : 8px;
    background    : #0b0f25;
    border-radius : 50%;
    box-shadow    : inset 0 0 0 5px #080b1d;

}

@keyframes animate {
    0% {
        transform : rotate(0deg);
    }
    100% {
        transform : rotate(360deg);
    }
}
</style>