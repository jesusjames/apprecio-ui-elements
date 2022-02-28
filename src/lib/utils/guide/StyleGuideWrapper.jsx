import '@apprecio/apprecio-tailwindcss-utils/dist/tailwind-customized.css';
import GlobalStyle from '../theme/GlobalStyle';

const StyleGuideWrapper = ({ children }) => (
  <GlobalStyle>
    {children}
  </GlobalStyle>
);

export default StyleGuideWrapper;
