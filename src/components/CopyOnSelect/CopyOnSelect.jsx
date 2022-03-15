/**
 *
 * CopyOnSelect
 *
 */

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { CopyOnSelectStyled } from './style';

// Assets
import Share from '../image/Share.svg';

const CopyOnSelect = ({ value }) => {
  const copyOnSelectRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <CopyOnSelectStyled showTooltip={showTooltip}>
      <input
        ref={copyOnSelectRef}
        onClick={() => {
          copyOnSelectRef.current.disabled = false;
          copyOnSelectRef.current.value = value;
          copyOnSelectRef.current.select();
          document.execCommand('copy');
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 1000);
          copyOnSelectRef.current.value = '';
          copyOnSelectRef.current.disabled = true;
        }}
        placeholder={value}
      />
      <button
        type="button"
        onClick={() => {
          if (navigator.share) {
            navigator
              .share({
                title: `Únete a la tienda de ${
                  JSON.parse(localStorage.getItem('userInfo')).first_name
                }`,
                text: `Únete a la tienda de ${
                  JSON.parse(localStorage.getItem('userInfo')).first_name
                }`,
                url: value,
              });
          }
        }}
      >
        <img src={Share} alt="Share" />
      </button>
      <p>¡Copiado!</p>
    </CopyOnSelectStyled>
  );
};

CopyOnSelect.propTypes = {
  /**
   * El valor a ser mostrado.
   */
  value: PropTypes.string.isRequired,
};

export default CopyOnSelect;
