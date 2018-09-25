'use strict';

const path = require("path");
const { appNodeModules } = require('../../paths');

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const monacoWebpackPlugin = new MonacoWebpackPlugin({
    languages: [
        "yaml",
        "json",
    ],
    features: [
      "coreCommands",
      "folding",
      "bracketMatching",
      "clipboard",
      "find",
    ],
  })

let isMonacoInstalled = false;
try {
  isMonacoInstalled = require.resolve(path.join(appNodeModules, "monaco-editor/package.json")).length > 0
} catch (e) {} // eslint-disable-line no-empty

module.exports = isMonacoInstalled ? [
  { development: monacoWebpackPlugin, production: monacoWebpackPlugin }
] : [];
