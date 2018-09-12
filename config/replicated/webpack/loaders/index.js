'use strict';

const sassLoader = require("./sass")

const development = () => [
    sassLoader.development
]

const production = (ExtractTextPlugin, extractTextPluginOptions, shouldUseSourceMap) => [
    sassLoader.production(ExtractTextPlugin, extractTextPluginOptions, shouldUseSourceMap)
]

module.exports = {
    development,
    production,
}
