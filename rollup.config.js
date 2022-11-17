// import tsconfig from './tsconfig.json';

// import dts from 'rollup-plugin-dts'par
import vuePlugin from 'rollup-plugin-vue';
import external from "rollup-plugin-peer-deps-external";
import commonjs from '@rollup/plugin-commonjs';
import sourcemaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import ts from "rollup-plugin-ts";
import styles from "rollup-plugin-styles";
import postcss from 'rollup-plugin-postcss'
// import esbuild from 'rollup-plugin-esbuild'
import babel from '@rollup/plugin-babel';
import multiEntry from '@rollup/plugin-multi-entry';


const plugins = [
  vuePlugin(),
  
  typescript({
    config: './tsconfig.json',

    useTsconfigDeclarationDir: false,
    declaration: false,
    // verbosity: 3,
    // clean: true,
    // check: true,
  }),
  // ts({
  //   // transpiler: 'babel',
  // }),
  // dts(),
  external({
    includeDependencies: [
      'vue',
    ],
  }),
  babel(),
  commonjs({
    include: /\/node_modules\//,
    extensions: ['.js', '.ts', '.vue'],
  }),
  sourcemaps(),
  postcss({
    include: /&module=.*\.s?css$/,
    use: {
      sass: {
        // data: `@import './src/styles/_variables';`,
      },
    },
  }),
  styles(),
  
  // terser({
  //   output: { comments: false },
  //   compress: {
  //     drop_console: true,
  //   },
  // }),
];


export default [
  // {
  //   input: 'src/**/*.ts',
  //   plugins: [
  //     ...plugins,
  //     multiEntry(),
  //   ],
  //   output: {
  //     preserveModules: true,
  //     name: 'esm',
  //     // file: `dist/index.esm.mjs`,
  //     dir: 'dist',
  //     format: 'esm',
  //     // sourcemap: true,
  //     globals: { 
  //       "vue": "vue",
  //     }
  //   },
  // },
  {
    input: `src/index.ts`,
    plugins,
    output: [
      {
        name: 'cjs',
        file: `dist/index.cjs.js`,
        format: 'cjs',
        // sourcemap: true,
        exports: 'named',
        globals: { 
          "vue": "vue",
        },
      },
      {
        name: 'esm',
        file: `dist/index.esm.mjs`,
        format: 'esm',
        // sourcemap: true,
        globals: { 
          "vue": "vue",
        }
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
]