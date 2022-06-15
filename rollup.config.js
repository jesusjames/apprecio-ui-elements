import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';
import commonjs from '@rollup/plugin-commonjs';

const getCommonConfig = ({ target = '', plugins = [] }) => ({
  output: [
    {
      dir: target,
      format: 'es',
    },
  ],
  plugins: [
    del({ targets: [`${target}*`] }),
    peerDepsExternal(),
    commonjs({
      include: 'node_modules/**',
    }),
    nodeResolve({
      // eslint-disable-next-line no-use-before-define
      extensions,
    }),
    image(),
    postcss(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['babel-plugin-styled-components'],
      presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
    }),
    ...plugins,
  ],
  global: {
    'styled-components': 'styled',
    classnames: 'classNames',
    'prop-types': 'PropTypes',
  },
});

const extensions = ['.js', '.jsx', 'mjs', '.css'];
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: {
      index: 'src/components/index.js',
    },
    ...getCommonConfig({ target: 'dist/core/' }),
  },
  // utils for theming
  {
    input: {
      useTheme: 'src/lib/utils/theme/customization/useTheme.jsx',
      globalStyle: 'src/lib/utils/theme/GlobalStyle/index.jsx',
      apprecioTheme: 'src/lib/utils/theme/GlobalStyle/theme.js',
    },
    ...getCommonConfig({
      target: 'dist/utils/theme/',
      plugins: [
        copy({
          targets: [
            {
              src: 'src/lib/utils/theme/style/css',
              dest: 'dist/utils/style',
            },
          ],
        }),
      ],
    }),
  },
];
