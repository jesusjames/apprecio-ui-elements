/**
 *
 * Autocomplete
 *
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  AutocompleteStyled,
  InputStyled,
  SuggestionsStyled,
} from './style';

// Assets
import BlueArrow from '../image/BlueArrow.svg';

const Autocomplete = ({
  error,
  onReady,
  placeholder,
  suggestions,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState('');

  let mainInputRef = useRef(null);

  const updateQuery = (q) => {
    if (q) setShowSuggestions(true);
    else setShowSuggestions(false);
    setQuery(q);
    onReady(0);
  };

  const updateSelectedValue = (q) => {
    setShowSuggestions(false);
    mainInputRef.value = q.label;
    onReady(q.id);
  };

  return (
    <AutocompleteStyled>
      <button
        className={showSuggestions ? 'arrow up' : 'arrow down'}
        onClick={() => setShowSuggestions(!showSuggestions)}
        type="button"
      >
        <img
          src={BlueArrow}
          alt="Arrow"
        />
      </button>
      <InputStyled
        ref={(e) => {
          mainInputRef = e;
          return 0;
        }}
        placeholder={placeholder}
        onChange={(e) => updateQuery(e.target.value)}
        className={error ? 'error' : ''}
      />
      <SuggestionsStyled className={showSuggestions ? '' : 'hidden'}>
        {suggestions
          .filter((sug) => {
            const regex = new RegExp(query, 'gi');
            return sug.label.match(regex);
          })
          .map((sug) => (
            <button
              key={`provider-a-${sug.id}`}
              onClick={() => updateSelectedValue(sug)}
              type="button"
            >
              <li>
                {sug.label}
              </li>
            </button>
          ))}
      </SuggestionsStyled>
    </AutocompleteStyled>
  );
};

Autocomplete.defaultProps = {
  error: false,
  placeholder: '',
};

Autocomplete.propTypes = {
  /**
   * Determina si se muestra un error.
   */
  error: PropTypes.bool,
  /**
   * Función que se activa cuando el usuario selecciona una opción.
   */
  onReady: PropTypes.func.isRequired,
  /**
   * El placeholder del input.
   */
  placeholder: PropTypes.string,
  /**
   * El arreglo de sugerencias que se mostrarán.
   */
  suggestions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default Autocomplete;
