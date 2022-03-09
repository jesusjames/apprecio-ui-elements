/**
 *
 * Drawer
 *
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { DrawerStyled } from './style';

// Assets
import YellowArrow from '../image/YellowArrowRight.svg';
import RedArrow from '../image/RedArrowRight.svg';

const Drawer = ({
  children,
  showOn,
  showSetter,
  variant = 'quinary',
}) => {
  const drawerRef = useRef(null);

  // Triggers a redraw on iOS, necessary for blur effect to work
  useEffect(() => {
    drawerRef.current.style.display = 'table';
    // eslint-disable-next-line no-unused-expressions
    drawerRef.current.offsetHeight;
    drawerRef.current.style.display = 'block';
  }, [showOn]);

  return (
    <DrawerStyled
      ref={drawerRef}
      showOn={showOn}
      onClick={(e) => {
        if (e.target === drawerRef.current) {
          showSetter(false);
        }
      }}
      variant={variant}
    >
      <div className="drawerContent">
        <button
          className="closeButton"
          type="button"
          onClick={() => showSetter(false)}
        >
          <img src={variant === 'primary' ? RedArrow : YellowArrow} alt="<" />
          <p>Volver</p>
        </button>
        <div className="childrenContainer">{children}</div>
      </div>
    </DrawerStyled>
  );
};

Drawer.defaultProps = {
  children: null,
  variant: '',
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
};

export default Drawer;
