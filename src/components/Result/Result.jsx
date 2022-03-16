import PropTypes from 'prop-types';
import { ResultStyled } from './style';
import { GenerateIcon } from './helpers';

// Assets
import NoImage from '../image/NoImage.svg';

const Result = ({
  header,
  subheader,
  image,
  ...rest
}) => (
  <ResultStyled {...rest}>
    <div className="info-container">
      <div className="upper-half">
        <h1>Resultado</h1>
      </div>
      <div className="lower-half">
        <h2>{header}</h2>
        <h2>{subheader}</h2>
      </div>
    </div>
    <div className="image-container">
      <GenerateIcon
        className="image"
        icon={image ?? NoImage}
        orientation="right"
      />
    </div>
  </ResultStyled>
);

Result.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default Result;
