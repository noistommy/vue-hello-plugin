## Explanation of Build Files

- UMD: vue-hello-plugin.js
- CommonJS: vue-hello-plugin.common.js
- ES Module: vue-hello-plugin.esm.js

### Terms

- **[UMD](https://github.com/umdjs/umd)**: UMD builds can be used directly in the browser via a `<script>` tag. The default file from Unpkg CDN at [https://unpkg.com/vue-hello-plugin](https://unpkg.com/vue-hello-plugin) is the UMD build (`vue-hello-plugin.js`).

- **[CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1)**: CommonJS builds are intended for use with older bundlers like [browserify](http://browserify.org/) or [webpack 1](https://webpack.github.io). The default file for these bundlers (`pkg.main`) is the Runtime only CommonJS build (`vue-hello-plugin.common.js`).

- **[ES Module](http://exploringjs.com/es6/ch_modules.html)**: ES module builds are intended for use with modern bundlers like [webpack 2](https://webpack.js.org) or [rollup](http://rollupjs.org/). The default file for these bundlers (`pkg.module`) is the Runtime only ES Module build (`vue-hello-plugin.esm.js`).
