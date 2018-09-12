'use strict';

module.exports = [
    {
        development: [require.resolve("babel-plugin-emotion"), { "sourceMap": true, "autoLabel": true }],
        production: [require.resolve("babel-plugin-emotion"), { "hoist": true }],
    }
];
