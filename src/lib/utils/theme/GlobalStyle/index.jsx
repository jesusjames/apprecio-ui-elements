import {createGlobalStyle} from "styled-components";
import PropTypes from "prop-types";

import variablesCss from '../style/css/variables.css';
import fontsCss from '../style/css/fonts.css';

const GlobalStyle = ({children}) => {
  const GlobalStyles = createGlobalStyle`
    ${variablesCss}
    ${fontsCss}
    h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: normal;
      color: white;
    }
  `;

  return(
    <>
      <GlobalStyles/>
      {children}
    </>
  )
}

GlobalStyle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalStyle;
