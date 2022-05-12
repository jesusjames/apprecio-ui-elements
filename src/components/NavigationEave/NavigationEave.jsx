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
  children,
  goBackFunction,
  icon,
  mode,
  name,
  page,
  shortened,
  variant,
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
        onClick={goBackFunction}
      />
      <img className="logo" src={icon} alt={name} />
      <div className="children-bar">
        <div ref={slider} className="slider" />
        {children}
      </div>
    </NavigationEaveStyled>
  );
};

NavigationEave.defaultProps = {
  children: null,
  goBackFunction: () => {},
  icon: '',
  name: '',
  page: 0,
  shortened: false,
  variant: 'offWhite',
};

NavigationEave.propTypes = {
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
   * El ícono usado en la pestaña de navegación.
   */
  icon: PropTypes.string,
  /**
   * Cambia el estilo para dejar el escáner al descubierto.
   */
  mode: PropTypes.oneOf(['scanner', 'calculator']).isRequired,
  /**
   * Nombre mostrado cuando el ícono no puede ser mostrado.
   */
  name: PropTypes.string,
  /**
   * Determina qué botón ha sido seleccionado.
   */
  page: PropTypes.number,
  /**
   * Determina si la pestaña de navegación está reducida.
   */
  shortened: PropTypes.bool,
  /**
   * El color usado en la pestaña de navegación.
   */
  variant: PropTypes.oneOf(['primary', 'offWhite', 'transparent']),
};

export default NavigationEave;
