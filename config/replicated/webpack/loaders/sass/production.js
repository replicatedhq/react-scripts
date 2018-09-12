'use strict';

const autoprefixer = require('autoprefixer');

module.exports = (ExtractTextPlugin, extractTextPluginOptions, shouldUseSourceMap) => ({
    test: /\.s?css$/,
    loader: ExtractTextPlugin.extract(
        Object.assign(
            {
                fallback: {
                    loader: require.resolve('style-loader'),
                    options: {
                        hmr: false,
                    },
                },
                use: [
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 2,
                            minimize: true,
                            sourceMap: shouldUseSourceMap,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            // Necessary for external CSS imports to work
                            // https://github.com/facebookincubator/create-react-app/issues/2677
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                    require.resolve("sass-loader"),
                ],
            },
            extractTextPluginOptions
        )
    ),
})
