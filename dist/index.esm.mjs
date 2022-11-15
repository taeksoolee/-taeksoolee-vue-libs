import { defineComponent, openBlock, createElementBlock } from 'vue';

var script$1 = defineComponent({
  setup() {
  }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, "Hello World");
}

script$1.render = render$1;
script$1.__file = "src/components/layout/HaezoomLayout.vue";

var script = defineComponent({
  setup() {
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "Button");
}

script.render = render;
script.__file = "src/components/element/Button.vue";

console.log("hello world");

export { script as Button, script$1 as HaezoomLayout };
//# sourceMappingURL=index.esm.mjs.map
