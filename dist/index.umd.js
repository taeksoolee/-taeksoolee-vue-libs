(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.umd = {}, global.vue));
})(this, (function (exports, vue) { 'use strict';

  var script$1 = vue.defineComponent({
    setup() {
    }
  });

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, "Hello World");
  }

  script$1.render = render$1;
  script$1.__file = "src/components/layout/HaezoomLayout.vue";

  var script = vue.defineComponent({
    setup() {
    }
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", null, "Button");
  }

  script.render = render;
  script.__file = "src/components/element/CustomButton.vue";

  console.log("hello world");

  exports.CustomButton = script;
  exports.HaezoomLayout = script$1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
