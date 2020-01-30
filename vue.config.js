const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin');
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    publicPath         : './',
    outputDir          : 'dist',
    lintOnSave         : true,
    assetsDir          : 'static',
    runtimeCompiler    : false,
    parallel           : require('os').cpus().length > 1,
    productionSourceMap: false,
    chainWebpack       : config => {
        config.resolve.alias.set('@', resolve('src'));
        config.resolve.alias.set('public', resolve('public'));
    },
    configureWebpack   : {
        performance: {
            hints            : 'warning',
            maxEntrypointSize: 50000000,
            maxAssetSize     : 30000000,
            assetFilter      : function (assetFilename) {
                return assetFilename.endsWith('.js');
            }
        },
        plugins    : [
            new VueAutoRoutingPlugin({
                pages       : 'public/template-component/',
                importPrefix: 'public/template-component/',
                nested      : true
            })
        ]
    },
    css                : {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    devServer          : {
        host   : '0.0.0.0',
        port   : 8000,
        https  : true,
        open   : false,
        hotOnly: true
    }
};
