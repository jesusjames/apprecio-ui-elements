/**
 *
 * HalfDrawer
 *
 */

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { HalfDrawerStyled } from './style';

const HalfDrawer = ({
  children,
  defaultHeight,
  setShow,
  show,
  triggerOnMovement,
  variant,
  zIndex,
}) => {
  const [initialY, setInitialY] = useState(0);
  const [initialHeight, setInitialHeight] = useState(0);
  const [height, setHeight] = useState();
  const [displayAnimations, setDisplayAnimations] = useState(true);

  const container = useRef(null);

  useEffect(() => {
    if (show) {
      setHeight(defaultHeight);
    } else {
      setHeight(0);
    }
  }, [show]);

  useEffect(() => {
    container.current.style.height = `${height}px`;
  }, [height]);

  useEffect(() => {
    if (displayAnimations) {
      container.current.style.transition = 'height 0.35s ease-in-out';
    } else {
      container.current.style.transition = 'none';
    }
  }, [displayAnimations]);

  return (
    <HalfDrawerStyled
      ref={container}
      onTouchEnd={() => {
        setDisplayAnimations(true);
        if (height > (defaultHeight * 3) / 4) {
          setHeight(defaultHeight);
        } else {
          setShow(false);
          setHeight(0);
        }
      }}
      variant={variant}
      zIndex={zIndex}
    >
      <button
        className="handle"
        aria-label="handle"
        type="button"
        onTouchStart={(e) => {
          setDisplayAnimations(false);
          setInitialY(e.touches[0].clientY);
          setInitialHeight(height);
        }}
        onTouchMove={(e) => {
          setHeight(initialHeight + initialY - e.touches[0].clientY);
          if (height > defaultHeight + 100) {
            triggerOnMovement();
          }
        }}
        onClick={() => triggerOnMovement()}
      />
      <div className="content-container">{children}</div>
    </HalfDrawerStyled>
  );
};

HalfDrawer.defaultProps = {
  children: null,
  defaultHeight: 100,
  setShow: () => {},
  show: false,
  triggerOnMovement: () => {},
  variant: 'offWhite',
  zIndex: 1,
};

HalfDrawer.propTypes = {
  /**
   * El contenido del drawer.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * La altura a la que el drawer será mostrado cuando esté inactivo.
   */
  defaultHeight: PropTypes.number,
  /**
   * Función que determina si el drawer se muestra o no.
   */
  setShow: PropTypes.func,
  /**
   * Determina si el drawer se muestra o no.
   */
  show: PropTypes.bool,
  /**
   * Función que se ejecuta en cuanto el drawer se mueve.
   */
  triggerOnMovement: PropTypes.func,
  /**
   * Define el color del drawer.
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'quinary',
    'offWhite',
  ]),
  /**
   * Usado para calcular el valor z-index del drawer.
   * Útil en los casos en los que más de un drawer son usados.
   */
  zIndex: PropTypes.number,
};

export default HalfDrawer;
