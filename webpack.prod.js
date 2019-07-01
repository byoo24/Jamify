const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MinifyPlugin = require("babel-minify-webpack-plugin");

const minifyOpts = {};
const pluginOpts = {
    comments: false
};


module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new MinifyPlugin(minifyOpts, pluginOpts)
    ]
});