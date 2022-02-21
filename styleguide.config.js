const {version} = require('./package');
const path = require("path");

module.exports = {
    title: `Apprecio UI Elements`,
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/lib/utils/guide/StyleGuideWrapper.jsx'),
    },
    version,
    usageMode: 'expand',
    skipComponentsWithoutExample: true,
    sections: [
        {
            name: 'Introducción',
            content: 'docs/introduction.md'
        },
        {
            name: 'Instalación',
            content: 'docs/installation.md'
        },
        {
            name: 'UI Components',
            content: 'docs/ui.md',
            exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
            usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
            sections: [
                {
                    name: 'Components',
                    components: 'src/components/**/[A-Z]*.{jsx,tsx}'
                }
            ]
        }
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
    styles: {
        Logo: {
            logo: {
                color: '#fff',
                fontSize: 24,
                fontWeight: 'bold'
            },
            version: {
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold'
            },
        }
    },
    webpackConfig: require('react-scripts/config/webpack.config'),
}
