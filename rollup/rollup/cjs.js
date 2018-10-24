import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'index.js',
    dir: 'dist',
    name: 'myWidget',
    format: 'cjs'
  },
  external: [
    'react',
    'react-dom',
    'styled-components'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};
