import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import vuePlugin from 'rollup-plugin-vue';

export default [
  {
    input: `src/components/element/index.ts`,
    plugins: [
      vuePlugin(),
      esbuild()
    ],
    output: [
      {
        file: `dist/components/element/index.js`,
        format: 'cjs',
        sourcemap: true,
        exports: 'default',
      },
    ]
  },
  {
    input: `src/index.ts`,
    plugins: [dts()],
    output: {
      file: `dist/index.d.ts`,
      format: 'es',
    },
  }
]