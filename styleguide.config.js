const { version } = require('./package');
const path = require("path");

module.exports = {
    title: `Apprecio UI Elements`,
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/lib/utils/guide/StyleGuideWrapper.jsx'),
    },
    version,
    usageMode: 'expand',
    skipComponentsWithoutExample: true,
    theme: {
        maxWidth: '100%',
        sidebarWidth: 300,
        color: {
            link: '#ffffff',
            linkHover: '#ffffff',
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
    }
}
