<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>


<style lang="less">
html,
body {
    height   : 100vh;
    padding  : 0;
    margin   : 0;
    overflow : hidden;
}

#app {
    font-family             : "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing  : antialiased;
    -moz-osx-font-smoothing : grayscale;
    text-align              : center;
    color                   : #2c3e50;
    background              : #15212c;
    height                  : 100vh;
    display                 : flex;
    flex-flow               : column nowrap;


}

.v-note-wrapper,
.hljs,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html,
pre {
    background : none !important;
}

.v-note-wrapper .v-note-panel.shadow {
    box-shadow : none !important;
}


@font-face {
    font-family : "Aclonica";
    src         : url("./assets/fonts/Aclonica-Regular.ttf");
}

@font-face {
    font-family : "Allerta Stencil";
    src         : url("./assets/fonts/AllertaStencil-Regular.ttf");
}

@font-face {
    font-family : "Anton";
    src         : url("./assets/fonts/Anton-Regular.ttf");
}

@font-face {
    font-family : "Dancing Script";
    src         : url("./assets/fonts/DancingScript-Regular.ttf");
}

@font-face {
    font-family : "Dorsa";
    src         : url("./assets/fonts/Dorsa-Regular.ttf");
}

@font-face {
    font-family : "Geo Oblique";
    src         : url("./assets/fonts/Geo-Oblique.ttf");
}

@font-face {
    font-family : "Germania One";
    src         : url("./assets/fonts/GermaniaOne-Regular.ttf");
}

@font-face {
    font-family : "Gochi Hand";
    src         : url("./assets/fonts/GochiHand-Regular.ttf");
}

@font-face {
    font-family : "Kalam";
    src         : url("./assets/fonts/Kalam-Regular.ttf");
}

@font-face {
    font-family : "Kaushan Script";
    src         : url("./assets/fonts/KaushanScript-Regular.ttf");
}

@font-face {
    font-family : "Monoton";
    src         : url("./assets/fonts/Monoton-Regular.ttf");
}

@font-face {
    font-family : "Orbitron";
    src         : url("./assets/fonts/Orbitron-Regular.ttf");
}

@font-face {
    font-family : "Pattaya";
    src         : url("./assets/fonts/Pattaya-Regular.ttf");
}

@font-face {
    font-family : "Permanent Marker";
    src         : url("./assets/fonts/PermanentMarker-Regular.ttf");
}

@font-face {
    font-family : "Poiret One";
    src         : url("./assets/fonts/PoiretOne-Regular.ttf");
}

@font-face {
    font-family : "Righteous";
    src         : url("./assets/fonts/Righteous-Regular.ttf");
}

@font-face {
    font-family : "Six Caps";
    src         : url("./assets/fonts/SixCaps.ttf");
}

@font-face {
    font-family : "Source Code Pro";
    src         : url("./assets/fonts/SourceCodePro-Regular.ttf");
}

@font-face {
    font-family : "Syncopate";
    src         : url("./assets/fonts/Syncopate-Regular.ttf");
}

@font-face {
    font-family : "Tangerine";
    src         : url("./assets/fonts/Tangerine-Regular.ttf");
}

@font-face {
    font-family : "Timmana";
    src         : url("./assets/fonts/Timmana-Regular.ttf");
}

@font-face {
    font-family : "Ultra";
    src         : url("./assets/fonts/Ultra-Regular.ttf");
}

@font-face {
    font-family : "VT323";
    src         : url("./assets/fonts/VT323-Regular.ttf");
}

@font-face {
    font-family : "Wire One";
    src         : url("./assets/fonts/WireOne.ttf");
}

</style>
