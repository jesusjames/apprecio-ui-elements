/**
 *
 * Drawer
 *
 */
import PropTypes from 'prop-types';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { DrawerStyled } from './style';

// Assets
import YellowArrow from '../image/YellowArrowRight.svg';
import RedArrow from '../image/RedArrowRight.svg';

const Drawer = ({
  children,
  showOn,
  showSetter,
  variant,
  className,
  ...rest
}) => {
  const drawerRef = useRef(null);

  // Triggers a redraw on iOS, necessary for blur effect to work
  useEffect(() => {
    if (showOn) {
      drawerRef.current.style.display = 'table';
      // eslint-disable-next-line no-unused-expressions
      drawerRef.current.offsetHeight;
      drawerRef.current.style.display = 'block';
    }
  }, [showOn]);

  const defaultStyleDrawerContent = {
    height: '0vh',
  };

  return (
    <AnimatePresence>
      {showOn && (
        <DrawerStyled
          ref={drawerRef}
          showOn={showOn}
          onClick={() => {
            showSetter(false);
          }}
          variant={variant}
          className={className}
          {...rest}
        >
          <motion.div
            className="drawerContent"
            initial={defaultStyleDrawerContent}
            animate={{ height: '85vh' }}
            exit={defaultStyleDrawerContent}
            transition={{ duration: 0.5, ease: [0.68, -0.55, 0.27, 1.55] }}
          >
            <button
              className="closeButton"
              type="button"
              onClick={() => showSetter(false)}
            >
              <img src={variant === 'primary' ? RedArrow : YellowArrow} alt="<" />
              <p>Volver</p>
            </button>
            <div className="childrenContainer">{children}</div>
          </motion.div>
        </DrawerStyled>
      )}
    </AnimatePresence>
  );
};

Drawer.defaultProps = {
  children: null,
  variant: 'quinary',
};

Drawer.propTypes = {
  /**
   * Los componentes hijos.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * Determina si el componente es visible o no.
   */
  showOn: PropTypes.bool.isRequired,
  /**
   * Función para determinar la visibilidad del componente.
   */
  showSetter: PropTypes.func.isRequired,
  /**
   * El color del drawer
   */
  variant: PropTypes.oneOf(['primary', 'quinary']),
  className: PropTypes.string,
};

export default Drawer;
