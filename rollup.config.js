// import tsconfig from './tsconfig.json';

import dts from 'rollup-plugin-dts'
import vuePlugin from 'rollup-plugin-vue';
import external from "rollup-plugin-peer-deps-external";
import commonjs from '@rollup/plugin-commonjs';
import sourcemaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import ts from "rollup-plugin-ts";
import esbuild from 'rollup-plugin-esbuild'

export default [
  {
    input: `src/index.ts`,
    plugins: [
      vuePlugin(),
      commonjs({
        include: /\/node_modules\//,
        extensions: ['.js', '.ts', '.vue']
      }),
      typescript({
        config: './tsconfig.json',
        useTsconfigDeclarationDir: true,
        declaration: true
      }),
      ts({}),
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
        // preserveModules: true,
        name: 'cjs',
        file: `dist/index.cjs.js`,
        format: 'cjs',
        // sourcemap: true,
        exports: 'named',
        globals: { 
          "vue": "vue",
          "@vue/composition-api": "compositionApi",
        },
      },
      {
        name: 'esm',
        file: `dist/index.esm.mjs`,
        format: 'esm',
        // sourcemap: true,
        globals: { 
          "vue": "vue",
        },
      },
      {
        name: 'umd',
        file: `dist/index.umd.js`,
        format: 'umd',
        // sourcemap: true,
        globals: { 
          "vue": "vue",
        },
      },
    ]
  },
  // {
  //   input: `src/index.ts`,
  //   plugins: [
  //     // typescript(),
  //     dts(),
  //     vuePlugin(),
  //   ],
  //   output: {
  //     file: `dist/index.d.ts`,
  //     format: 'es',
  //     globals: { 
  //       "vue": "vue",
  //     },
  //   },
  // }
]