import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import 'animate.css';
import '../style/css/variables.css';
import '../style/css/fonts.css';
import '../style/css/global.css';

import { useTheme } from '../customization/useTheme';

const GlobalStyle = ({ children }) => {
  const { theme, themeLoaded } = useTheme();

  return (
    themeLoaded
    && (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
    )
  );
};

GlobalStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyle;
