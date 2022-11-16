import { defineComponent, openBlock, createElementBlock, renderSlot, createElementVNode } from 'vue';

var script$3 = defineComponent({
  name: "HBox",
  setup() {
  }
});

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}

script$3.render = render$3;
script$3.__file = "src/components/element/HBox.vue";

var script$2 = defineComponent({
  props: {
    disabled: {
      default: false,
      type: Boolean
    }
  },
  name: "HSubmitButton",
  setup() {
  }
});

const _hoisted_1$1 = ["disabled"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    type: "submit",
    disabled: _ctx.disabled,
    class: "btn"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1$1);
}

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = "\n.btn[data-v-0b575ddc] {\n    padding: 5px;\n}\n";
n(css,{});

script$2.render = render$2;
script$2.__scopeId = "data-v-0b575ddc";
script$2.__file = "src/components/forms/HSubmitButton.vue";

var script$1 = defineComponent({
  name: "HInput",
  setup() {
  }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input");
}

script$1.render = render$1;
script$1.__file = "src/components/forms/HInput.vue";

var script = defineComponent({
  name: "HVppLayout",
  setup() {
  }
});

const _hoisted_1 = /* @__PURE__ */ createElementVNode("h1", null, "VPP Layout", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    renderSlot(_ctx.$slots, "default")
  ]);
}

script.render = render;
script.__file = "src/components/layout/HVppLayout.vue";

console.log("hello world");

export { script$3 as HBox, script$1 as HInput, script$2 as HSubmitButton, script as HVppLayout };
