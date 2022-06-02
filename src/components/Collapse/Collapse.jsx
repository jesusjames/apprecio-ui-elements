import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isNil, propOr } from 'ramda';
import { slideToggle, slideDown, slideUp } from '../../lib/utils/slide';

const usePrevius = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Collapse = (props) => {
  const {
    className, isOpen, onOpening, onOpened, delayOpen, onClosing, onClosed,
    nameCollapseOpen, children, duration, ...rest
  } = props;

  const prevProps = usePrevius({ nameCollapseOpen });
  const slideRef = useRef(null);

  useEffect(() => {
    const { current: element } = slideRef;
    let timer;
    if (delayOpen && !(isEmpty(propOr('', 'nameCollapseOpen', prevProps)) || isNil(propOr('', 'nameCollapseOpen', prevProps)))) {
      timer = setTimeout(() => {
        slideToggle(element, duration, onClosing, onClosed, onOpening, onOpened);
      }, duration);
    } else if (isOpen) {
      slideDown(element, duration, onOpening, onOpened);
    } else {
      slideUp(element, duration, onClosing, onClosed);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen, delayOpen, nameCollapseOpen]);

  return (
    <div className={className} ref={slideRef} {...rest}>
      {children}
    </div>
  );
};

Collapse.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  delayOpen: PropTypes.bool,
  nameCollapseOpen: PropTypes.string,
  children: PropTypes.node,
  duration: PropTypes.number,
  onOpening: PropTypes.func,
  onOpened: PropTypes.func,
  onClosing: PropTypes.func,
  onClosed: PropTypes.func,
};

Collapse.defaultProps = {
  isOpen: false,
  duration: 500,
  nameCollapseOpen: '',
};

export default Collapse;
