import '../../../css/styles.css';
import GlobalStyle from '../theme/GlobalStyle';

const StyleGuideWrapper = ({ children }) => (
  <GlobalStyle>
    {children}
  </GlobalStyle>
);

export default StyleGuideWrapper;
