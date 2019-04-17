/*!
 * vue-hello-plugin v0.0.0 
 * (c) 2019 noistommy
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.VueHelloPlugin = factory());
}(this, (function () { 'use strict';

    var version = '0.0.0';
    var install = function (Vue) {
        Vue.prototype.$add = function (a, b) {
            return a + b;
        };
    };
    var plugin = {
        install: install,
        version: version
    };
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(plugin);
    }

    return plugin;

})));
