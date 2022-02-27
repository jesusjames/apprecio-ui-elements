/**
 *
 * CopyOnSelect
 *
 */

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';
import Share from 'images/Share.svg';

const CopyOnSelectContainer = styled.div`
  height: 46px;
  display: flex;

  & > input {
    height: 46px;
    width: calc(${theme.width.default} - ${theme.spacing[3]});
    border-style: solid;
    border-width: 1px;
    border-color: ${theme.palette.primary};
    border-radius: ${theme.rounding.wedged};
    background-color: ${theme.palette.background.offWhite};
    padding: ${theme.spacing[3]};

    color: ${theme.palette.text.onOffWhite};
    font-family: ${theme.typeface.default}, sans-serif;
    font-weight: 600;
    letter-spacing: -0.12px;
    font-size: 12px;
    line-height: 18;

    box-sizing: border-box;

    &::placeholder {
      color: ${theme.palette.text.onOffWhite};
      font-family: ${theme.typeface.default};
      font-weight: 600;
      letter-spacing: -0.12px;
      font-size: 12px;
      line-height: 18;
    }
  }

  & > p {
    opacity: ${props => (props.showTooltip ? 1 : 0)};
    position: absolute;
    background-color: #00000033;
    top: 215px;
    left: calc((100vw - ${theme.width.default}) / 2);
    padding: 5px 10px;
    border-radius: ${theme.rounding.wedged};

    font-family: ${theme.typeface.default};
    font-weight: 600;
    letter-spacing: -0.12px;
    font-size: 12px;

    transition-timing-function: ease-out;
    transition-duration: 0.1s;
  }

  & > button {
    background-color: transparent;
    border: none;
    padding: 0;
    margin-left: ${theme.spacing[3]};
  }
`;

function CopyOnSelect({ value }) {
  const copyOnSelectRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <CopyOnSelectContainer showTooltip={showTooltip}>
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
              })
              .then(() => console.log('Successful share'))
              .catch(error => console.log('Error sharing', error));
          }
        }}
      >
        <img src={Share} alt="Share" />
      </button>
      <p>¡Copiado!</p>
    </CopyOnSelectContainer>
  );
}

CopyOnSelect.propTypes = {
  /**
   * The value to be shown.
   */
  value: PropTypes.string.isRequired,
};

export default CopyOnSelect;
