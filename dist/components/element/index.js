'use strict';

var compositionApi = require('@vue/composition-api');
var vue = require('vue');

var script = compositionApi.defineComponent({
  setup() {
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("button", null, "Button");
}

script.render = render;
script.__file = "src/components/element/Button.vue";

var index = {
  Button: script
};

module.exports = index;
//# sourceMappingURL=index.js.map
