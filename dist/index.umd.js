(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('core-js/modules/es.object.keys.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'core-js/modules/es.object.keys.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.umd = {}, global.vue));
})(this, (function (exports, vue) { 'use strict';

  function render$2(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("div", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ]))
  }

  const script$5 = {};


  script$5.render = render$2;
  script$5.__file = "src/components/element/TBox.vue";

  function render$1(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("div", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ]))
  }

  var e = [],
    t = [];
  function n(n, r) {
    if (n && "undefined" != typeof document) {
      var a,
        s = !0 === r.prepend ? "prepend" : "append",
        d = !0 === r.singleTag,
        i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
      if (d) {
        var u = e.indexOf(i);
        -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
      } else a = c();
      65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
    }
    function c() {
      var e = document.createElement("style");
      if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) {
        e.setAttribute(t[n], r.attributes[t[n]]);
      }
      var a = "prepend" === s ? "afterbegin" : "beforeend";
      return i.insertAdjacentElement(a, e), e;
    }
  }

  var css$1 = "\ndiv[data-v-756ae876] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n";
  n(css$1,{});

  const script$4 = {};

  script$4.render = render$1;
  script$4.__scopeId = "data-v-756ae876";
  script$4.__file = "src/components/element/TCenterBox.vue";

  const _hoisted_1$2 = ["type"];
  var script$3 = vue.defineComponent({
      __name: 'TButton',
      props: {
          type: {
              type: String,
              default() {
                  return 'button';
              },
          },
          varient: {
              type: String,
              default() {
                  return 'primary';
              }
          }
      },
      setup(__props) {
          const props = __props;
          return (_ctx, _cache) => {
              return (vue.openBlock(), vue.createElementBlock("button", {
                  type: props.type,
                  class: vue.normalizeClass([
                      props.varient,
                  ])
              }, [
                  vue.renderSlot(_ctx.$slots, "default")
              ], 10, _hoisted_1$2));
          };
      }
  });

  var css = "button[data-v-6766c034] {\n  padding: 5px;\n}\n\n.primary[data-v-6766c034] {\n  background-color: var(--hds-primary-color);\n  color: red;\n}\n\n.secondary[data-v-6766c034] {\n  color: blue;\n}";
  n(css,{});

  script$3.__scopeId = "data-v-6766c034";
  script$3.__file = "src/components/forms/TButton.vue";

  function render(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("input"))
  }

  const script$2 = {};


  script$2.render = render;
  script$2.__file = "src/components/forms/TInput.vue";

  const UUIDGenerator = () => {
      const uuids = [];
      const getUUID = (prefix = '') => {
          return `${prefix}__${Math.round(Math.random() * 10000)}`;
      };
      const get = (prefix = '') => {
          while (true) {
              const uuid = getUUID(prefix);
              if (uuids.includes(uuid)) {
                  continue;
              }
              uuids.push(uuid);
              return uuid;
          }
      };
      const del = (uuid) => {
          for (let i = 0; i < uuids.length; i++) {
              if (uuids[i] === uuid) {
                  uuids.splice(i, 1);
                  i--;
              }
          }
      };
      return {
          get,
          del
      };
  };
  const uuidGenerator = UUIDGenerator();

  const _hoisted_1$1 = ["list"];
  const _hoisted_2 = ["id"];
  var script$1 = vue.defineComponent({
      __name: 'TAutoCompleteInput',
      props: {
          options: Array,
      },
      setup(__props) {
          const porps = __props;
          const prefix = `auto-complete-input`;
          const id = vue.ref('');
          vue.onMounted(() => {
              id.value = uuidGenerator.get(prefix);
          });
          vue.onBeforeUnmount(() => {
              uuidGenerator.del(id.value);
          });
          return (_ctx, _cache) => {
              return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                  vue.createElementVNode("input", { list: id.value }, null, 8, _hoisted_1$1),
                  vue.createElementVNode("datalist", { id: id.value }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(porps.options, (option, idx) => {
                          return (vue.openBlock(), vue.createElementBlock("option", { key: idx }, vue.toDisplayString(option), 1));
                      }), 128))
                  ], 8, _hoisted_2)
              ], 64));
          };
      }
  });

  script$1.__file = "src/components/forms/TAutoCompleteInput.vue";

  const _hoisted_1 = vue.createElementVNode("hr", null, null, -1);
  var script = vue.defineComponent({
      __name: 'TLayout1',
      props: {
          title: {
              default: String,
              require: false,
          }
      },
      setup(__props) {
          const props = __props;
          return (_ctx, _cache) => {
              return (vue.openBlock(), vue.createElementBlock("div", null, [
                  vue.createElementVNode("h1", null, vue.toDisplayString(props.title), 1),
                  _hoisted_1,
                  vue.renderSlot(_ctx.$slots, "default")
              ]));
          };
      }
  });

  script.__file = "src/components/layout/TLayout1.vue";

  const getColor = type => `--${type}-color`;

  const initTheme = (options) => {
      var _a;
      console.log('init theme!');
      const defaultColors = {
          primary: 'blue',
          secondary: 'gray',
          success: 'green',
          info: 'teal',
          warning: 'yellow',
          danger: 'red',
          light: 'white',
          dark: 'black',
      };
      const colors = (_a = options === null || options === void 0 ? void 0 : options.colors) !== null && _a !== void 0 ? _a : {};
      for (const k in defaultColors) {
          const type = k;
          const n = getColor(type);
          const v = colors[k] ? colors[k] : defaultColors[k];
          document.documentElement.style.setProperty(n, v);
      }
  };

  console.log('hello world');

  exports.TAutoCompleteInput = script$1;
  exports.TBox = script$5;
  exports.TButton = script$3;
  exports.TCenterBox = script$4;
  exports.TInput = script$2;
  exports.TLayout1 = script;
  exports.initTheme = initTheme;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
