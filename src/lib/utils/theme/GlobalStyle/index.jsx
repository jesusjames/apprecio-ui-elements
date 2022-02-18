import {createGlobalStyle, ThemeProvider} from "styled-components";
import PropTypes from "prop-types";

import variablesCss from '../style/css/variables.css';
import normalizeCss from '../style/css/normalize.css';
import fontsCss from '../style/css/fonts.css';
import resetCss from '../style/css/reset.css';
import globalCss from '../style/css/global.css';
import {useTheme} from "../customization/useTheme";

const GlobalStyle = ({children}) => {
  const GlobalStyles = createGlobalStyle`
    ${variablesCss}
    ${normalizeCss}
    ${fontsCss}
    ${resetCss}
    ${globalCss}
  `;

  const { theme, themeLoaded } = useTheme();

  return(
    themeLoaded &&
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      {children}
    </ThemeProvider>
  )
}

GlobalStyle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalStyle;
