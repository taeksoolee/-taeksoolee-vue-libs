import pkg from './package.json';
import { createRollupConfig } from './scripts/createRollupConfig';

const name = 'index';
const options = [
  {
    name,
    // format: 'cjs',
    // input: pkg.source,
    input: {
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: ['src/**/*.d.ts']
    }
  },
  // { name, format: 'esm', 
  //   // input: pkg.source 
  //   input: 'src/**/*.(vue|ts)'
  // },
  // {
  //   name,
  //   format: 'umd',
  //   // input: pkg.source,
  //   input: 'src/**/*.(vue|ts)'
  // },
];

export default options.map((option) => createRollupConfig(option));