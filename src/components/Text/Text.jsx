import { memo } from 'react';
import PropTypes from 'prop-types';
import { TagStyled } from './style';

const Text = (props) => {
  const {
    tag, children, color, fontSize, fontSizeSm, fontFamily,
    fontWeight, lineHeight, textDecoration, padding, margin,
    ...rest
  } = props;

  return (
    <TagStyled
      as={tag}
      color={color}
      fontSize={fontSize}
      fontSizeSm={fontSizeSm}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      textDecoration={textDecoration}
      padding={padding}
      margin={margin}
      {...rest}
    >
      {children}
    </TagStyled>
  );
};

Text.propTypes = {
  tag: PropTypes.string,
  /** Text content */
  children: PropTypes.node.isRequired,
  /** theme color */
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
  fontSize: PropTypes.string,
  fontSizeSm: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  textDecoration: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
};

Text.defaultProps = {
  tag: 'p',
  color: 'primary',
};

export default memo(Text);
