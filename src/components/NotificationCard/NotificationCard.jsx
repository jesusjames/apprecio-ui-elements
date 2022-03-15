import { useState } from 'react';
import PropTypes from 'prop-types';
import { NotificationCardStyled, NavigationBarStyled } from './style';

const NotificationCard = ({
  messages,
  variant,
}) => {
  const isArray = Array.isArray(messages);

  if (!isArray || (isArray && messages.length === 1)) {
    const onlyElement = isArray ? messages[0] : messages;

    return (
      <NotificationCardStyled variant={variant}>
        <p>{onlyElement.body}</p>
      </NotificationCardStyled>
    );
  }

  const [currentMessage, setCurrentMessage] = useState(0);

  return (
    <NotificationCardStyled variant={variant}>
      <p>n</p>
      <NavigationBarStyled>
        {messages.map((msg, index) => (
          <button
            className={`selector ${currentMessage === index ? 'selected' : ''}`}
            type="button"
            key={msg.body}
            aria-labelledby={`notification-card-selector-${index}`}
            onClick={() => setCurrentMessage(index)}
          />
        ))}
      </NavigationBarStyled>
    </NotificationCardStyled>
  );
};

const messageShape = PropTypes.shape({
  body: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  imageOrientation: PropTypes.oneOf(['left', 'right']),
});

NotificationCard.defaultProps = {
  variant: 'secondary',
};

NotificationCard.propTypes = {
  messages: PropTypes.oneOfType([
    messageShape,
    PropTypes.arrayOf(messageShape),
  ]).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
};

export default NotificationCard;
