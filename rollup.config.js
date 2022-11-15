// import tsconfig from './tsconfig.json';

import dts from 'rollup-plugin-dts'
import vuePlugin from 'rollup-plugin-vue';
import external from "rollup-plugin-peer-deps-external";
import commonjs from '@rollup/plugin-commonjs';
import sourcemaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import esbuild from 'rollup-plugin-esbuild'

export default [
  {
    input: `src/index.ts`,
    plugins: [
      vuePlugin(),
      commonjs({
        include: /\/node_modules\//,
      }),
      typescript(),
      external({
        includeDependencies: [
          'vue',
        ]
      }),
      sourcemaps(),
      esbuild(),
    ],
    output: [
      {
        name: 'cjs',
        file: `dist/index.cjs.js`,
        format: 'cjs',
        sourcemap: true,
        // exports: 'default',
        globals: { 
          "vue": "vue",
          "@vue/composition-api": "compositionApi",
        },
      },
      {
        name: 'esm',
        file: `dist/index.esm.mjs`,
        format: 'esm',
        sourcemap: true,
        globals: { 
          "vue": "vue",
          "@vue/composition-api": "compositionApi",
        },
      },
      {
        name: 'umd',
        file: `dist/index.umd.js`,
        format: 'umd',
        sourcemap: true,
        globals: { 
          "vue": "vue",
          "@vue/composition-api": "compositionApi",
        },
      },
    ]
  },
  {
    input: `src/index.ts`,
    plugins: [
      vuePlugin(),
      typescript(),
      dts(),
    ],
    output: {
      file: `dist/index.d.ts`,
      format: 'cjs',
      globals: { 
        "vue": "vue",
        "@vue/composition-api": "compositionApi",
      },
    },
  }
]