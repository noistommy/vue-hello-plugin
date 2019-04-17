# Installation

## Direct Download / CDN

https://unpkg.com/vue-hello-plugin/dist/vue-hello-plugin

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-hello-plugin@0.0.0/dist/vue-hello-plugin.js
 
Include vue-hello-plugin after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-hello-plugin/dist/vue-hello-plugin.js"></script>
```

## NPM

```sh
$ npm install vue-hello-plugin
```

## Yarn

```sh
$ yarn add vue-hello-plugin
```

When used with a module system, you must explicitly install the `vue-hello-plugin` via `Vue.use()`:

```javascript
import Vue from 'vue'
import VueHelloPlugin from 'vue-hello-plugin'

Vue.use(VueHelloPlugin)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-hello-plugin` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com/noistommy/vue-hello-plugin.git node_modules/vue-hello-plugin
$ cd node_modules/vue-hello-plugin
$ npm install
$ npm run build
```

