import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import sourcemaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import vuePlugin from 'rollup-plugin-vue';
// import { AmazonCognitoIdentity } from 'amazon-cognito-identity-js';

export function createRollupConfig(options, callback) {
  const name = options.name;
  // A file with the extension ".mjs" will always be treated as ESM, even when pkg.type is "commonjs" (the default)
  // https://nodejs.org/docs/latest/api/packages.html#packages_determining_module_system
  const extName = options.format === "esm" ? "mjs" : "js";
  // const outputName = 'dist/' + [name, options.format, extName].join('.');

  const outputName = "dist/" + [name, options.format, extName].join(".");

  const config = {
    input: options.input,
    output: {
      name: "haezoom-design-system",
      file: outputName,
      format: options.format,
      sourcemap: true,
      globals: { 
        "vue": "vue",
        "@vue/composition-api": "compositionApi",
      },
      // exports: "named",
    },
    plugins: [
      external({
        includeDependencies: [
          '@vue/composition-api',
        ]
      }),
      vuePlugin(/* options */),
      typescript({
        tsconfig: options.tsconfig,
        clean: true,
      }),
      options.format === "umd" &&
        commonjs({
          include: /\/node_modules\//,
        }),
        
      sourcemaps(),
      options.format !== "esm" &&
        terser({
          output: { comments: false },
          compress: {
            drop_console: true,
          },
        }),
    ].filter(Boolean),
  };

  return callback ? callback(config) : config;
}
