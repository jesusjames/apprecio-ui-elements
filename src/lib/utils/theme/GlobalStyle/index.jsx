import {createGlobalStyle} from "styled-components";
import PropTypes from "prop-types";

import variablesCss from '../style/css/variables.css';

const GlobalStyle = ({children}) => {
  const GlobalStyles = createGlobalStyle`
    ${variablesCss}
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
