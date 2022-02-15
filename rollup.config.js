import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';


const getCommonConfig = ({ target = '', plugins = [] }) => ({
  output: [
    {
      dir: target,
      format: 'es',
    }
  ],
  plugins: [
    del({ targets: [target + '*'] }),
    peerDepsExternal(),
    commonjs({
      include: 'node_modules/**',
    }),
    nodeResolve({
      extensions,
    }),
    image(),
    postcss(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['babel-plugin-styled-components'],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    ...plugins
  ],
  global: {
    'styled-components': 'styled',
    classnames: 'classNames',
    'prop-types': 'PropTypes',
  }
});

const extensions = ['.js', '.jsx', '.css'];
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: {
      index: 'src/components/index.js',
    },
    experimentalCodeSplitting: true,
    ...getCommonConfig({ target: 'dist/core/'}),
  }
];
