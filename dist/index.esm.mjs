import { openBlock, createElementBlock, createApp } from 'vue';
import { defineComponent } from '@vue/composition-api';

var script = defineComponent({
    setup() {
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, "Hello World"))
}

script.render = render;
script.__file = "src/components/Layout/HaezoomLayout.vue";

console.log('hello world');
createApp({});
//# sourceMappingURL=index.esm.mjs.map
