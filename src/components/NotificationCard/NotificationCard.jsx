import PropTypes from 'prop-types';
import { NotificationCardStyled } from './style';

const NotificationCard = ({
  messages,
}) => <NotificationCardStyled />;

const messageShape = PropTypes.shape({
  body: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  imageOrientation: PropTypes.oneOf(['left', 'right']),
});

NotificationCard.propTypes = {
  messages: PropTypes.oneOfType([
    messageShape,
    PropTypes.arrayOf(messageShape),
  ]),
};

export default NotificationCard;
