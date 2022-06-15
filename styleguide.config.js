const path = require('path');
const webpack = require('webpack');
// eslint-disable-next-line import/extensions
const { version } = require('./package');

module.exports = {
  title: 'Appreciate UI Elements',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/lib/utils/guide/StyleGuideWrapper.jsx'),
  },
  version,
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Introducción',
      content: 'docs/introduction.md',
    },
    {
      name: 'Instalación',
      content: 'docs/installation.md',
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      sections: [
        {
          name: 'Components',
          components: 'src/components/**/[A-Z]*.{jsx,tsx}',
        },
      ],
    },
  ],
  theme: {
    maxWidth: '100%',
    sidebarWidth: 300,
    color: {
      link: 'rgb(252 243 220)',
      linkHover: 'rgb(238,222,157)',
      sidebarBackground: '#FF4860',
    },
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
      ],
    },
  },
  styles: {
    Logo: {
      logo: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
      },
      version: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
  },
  dangerouslyUpdateWebpackConfig(config) {
    config.module.rules.push({
      test: /.\.md$/,
      type: 'javascript/auto',
    });
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
        'react-styleguidist/lib/loaders/utils/client/requireInRuntime',
      ),
    );
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
        'react-styleguidist/lib/loaders/utils/client/evalInContext',
      ),
    );
    return config;
  },
};
