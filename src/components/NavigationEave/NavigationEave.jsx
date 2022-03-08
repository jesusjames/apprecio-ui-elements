/**
 *
 * NavigationEave
 *
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { NavigationEaveStyled } from './style';

// Components
import BackArrow from '../BackArrow/BackArrow';

const NavigationEave = ({
  variant = 'offWhite',
  icon,
  name,
  children,
  goBackFunction,
  mode,
  page,
  shortened = false,
}) => {
  const slider = useRef(null);

  const noc = React.Children.count(children);
  const itemWidth = 60;
  const spaceWidth = (325 - itemWidth * noc) / noc;

  useEffect(() => {
    slider.current.style.left = `calc((100% - 325px) / 2 + ${spaceWidth / 2}px + ${page * (itemWidth + spaceWidth)}px)`;
  }, [page]);

  return (
    <NavigationEaveStyled variant={variant} mode={mode} shortened={shortened}>
      <BackArrow
        white={variant === 'primary' || mode === 'scanner'}
        onClick={goBackFunction}
      />
      <img className="logo" src={icon} alt={name} />
      <div ref={slider} className="slider" />
      <div className="children-bar">{children}</div>
    </NavigationEaveStyled>
  );
};

NavigationEave.propTypes = {
  /**
   * El color usado en la pestaña de navegación.
   */
  variant: PropTypes.oneOf(['primary', 'offWhite', 'transparent']),
  /**
   * El ícono usado en la pestaña de navegación.
   */
  icon: PropTypes.string,
  /**
   * Nombre mostrado cuando el ícono no puede ser mostrado.
   */
  name: PropTypes.string,
  /**
   * Nodos hijo.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * Función para regresar a la página anterior.
   */
  goBackFunction: PropTypes.func,
  /**
   * Cambia el estilo para dejar el escáner al descubierto.
   */
  mode: PropTypes.string.isRequired,
  /**
   * Determina qué botón ha sido seleccionado.
   */
  page: PropTypes.number,
  /**
   * Determina si la pestaña de navegación está reducida.
   */
  shortened: PropTypes.bool,
};

export default NavigationEave;
