/**
 *
 * InputAutocomplete
 *
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BlueArrow from 'images/BlueArrow.svg';

import theme, { spacingMapping } from '../../utils/theme';

const Container = styled.div`
  width: 315px;
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};

  & > .arrow {
    height: 10px;
    padding: 0;
    margin: 0;
    position: relative;
    left: calc(${theme.width.default} - 25px);
    top: 35px;
    transition-duration: 0.2s;
    cursor: pointer;
  }

  & > .arrow.up {
    transform: rotate(-180deg);
    cursor: pointer;
  }
`;

const Input = styled.input`
  background-color: ${theme.palette.background.white};
  border-radius: ${theme.rounding.wedged};
  border-style: solid;
  border-color: ${theme.palette.border.dark};
  border-width: 1px;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  width: 100%;
  font-family: ${theme.typeface.default}, sans-serif;
  font-weight: 500;

  &::placeholder {
    color: ${theme.palette.text.offWhite};
    font-family: ${theme.typeface.default}, sans-serif;
    font-weight: 500;
  }

  &:focus {
    outline: none;
  }

  &.error:not(:hover) {
    box-shadow: red 0 0 2px 2px !important;
  }
`;

const Suggestions = styled.ul`
  width: 100%;
  margin: ${theme.spacing[0]};
  list-style: none;
  padding: ${theme.spacing[2]} ${theme.spacing[0]};
  max-height: 150px;
  overflow-y: scroll;
  transition-duration: 0.2s;

  &.hidden {
    max-height: 0;
    padding: ${theme.spacing[0]};
  }

  li {
    font-family: ${theme.typeface.default}, sans-serif;
    font-weight: 500;
    padding: ${theme.spacing[2]} ${theme.spacing[4]};

    cursor: pointer;
  }

  li:hover {
    background-color: ${theme.palette.background.offWhite};
  }
`;

function InputAutocomplete({
  m1,
  m2,
  m3,
  m4,
  m5,
  mt1,
  mt2,
  mt3,
  mt4,
  mt5,
  mb1,
  mb2,
  mb3,
  mb4,
  mb5,
  placeholder,
  suggestions,
  propertyNames,
  onReady,
  error,
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState('');

  let mainInputRef = useRef(null);

  const updateQuery = q => {
    if (q) setShowSuggestions(true);
    else setShowSuggestions(false);
    setQuery(q);
    onReady(0);
  };

  const updateSelectedValue = q => {
    setShowSuggestions(false);
    mainInputRef.value = q[propertyNames.label];
    onReady(q[propertyNames.id]);
  };

  return (
    <Container
      margin={(() => {
        if (m5) return '5';
        if (m4) return '4';
        if (m3) return '3';
        if (m2) return '2';
        if (m1) return '1';
        return '0';
      })()}
      marginTop={(() => {
        if (mt5) return '5';
        if (mt4) return '4';
        if (mt3) return '3';
        if (mt2) return '2';
        if (mt1) return '1';
        return null;
      })()}
      marginBottom={(() => {
        if (mb5) return '5';
        if (mb4) return '4';
        if (mb3) return '3';
        if (mb2) return '2';
        if (mb1) return '1';
        return null;
      })()}
    >
      <img
        className={showSuggestions ? 'arrow up' : 'arrow down'}
        onClick={() => setShowSuggestions(!showSuggestions)}
        src={BlueArrow}
        alt="Arrow"
      />
      <Input
        ref={e => {
          mainInputRef = e;
          return 0;
        }}
        placeholder={placeholder}
        onChange={e => updateQuery(e.target.value)}
        className={error ? 'error' : ''}
      />
      <Suggestions className={showSuggestions ? '' : 'hidden'}>
        {suggestions
          .filter(sug => {
            const regex = new RegExp(query, 'gi');
            return sug[propertyNames.label].match(regex);
          })
          .map(sug => (
            <li
              key={`provider-a-${sug[propertyNames.id]}`}
              onClick={() => updateSelectedValue(sug)}
            >
              {sug[propertyNames.label]}
            </li>
          ))}
      </Suggestions>
    </Container>
  );
}

InputAutocomplete.propTypes = {
  /**
   * Whether the margin of the component should be of 1 unit, as specified in utils/theme.js. Has the lowest priority overall.
   */
  m1: PropTypes.bool,
  /**
   * Whether the margin of the component should be of 2 units, as specified in utils/theme.js. Overrides m1.
   */
  m2: PropTypes.bool,
  /**
   * Whether the margin of the component should be of 3 units, as specified in utils/theme.js. Overrides m2.
   */
  m3: PropTypes.bool,
  /**
   * Whether the margin of the component should be of 4 units, as specified in utils/theme.js. Overrides m3.
   */
  m4: PropTypes.bool,
  /**
   * Whether the margin of the component should be of 5 units, as specified in utils/theme.js. Overrides m4.
   */
  m5: PropTypes.bool,
  /**
   * Whether the top margin of the component should be of 1 unit, as specified in utils/theme.js. Overrides any m#.
   */
  mt1: PropTypes.bool,
  /**
   * Whether the top margin of the component should be of 2 units, as specified in utils/theme.js. Overrides mt1.
   */
  mt2: PropTypes.bool,
  /**
   * Whether the top margin of the component should be of 3 units, as specified in utils/theme.js. Overrides mt2.
   */
  mt3: PropTypes.bool,
  /**
   * Whether the top margin of the component should be of 4 units, as specified in utils/theme.js. Overrides mt3.
   */
  mt4: PropTypes.bool,
  /**
   * Whether the top margin of the component should be of 5 units, as specified in utils/theme.js. Alongside mb5 has the highest priority overall.
   */
  mt5: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 1 unit, as specified in utils/theme.js. Overrides any m#.
   */
  mb1: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 2 units, as specified in utils/theme.js. Overrides mb1.
   */
  mb2: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 3 units, as specified in utils/theme.js. Overrides mb2.
   */
  mb3: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 4 units, as specified in utils/theme.js. Overrides mb3.
   */
  mb4: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 5 units, as specified in utils/theme.js. Alongside mt5 has the highest priority overall.
   */
  mb5: PropTypes.bool,
  /**
   * The placeholder of the input.
   */
  placeholder: PropTypes.string,
  /**
   * The array of suggestions that are going to be displayed.
   */
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * It is used to select the keys that are going to be used as id and label for the suggestions
   */
  propertyNames: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  /**
   * Function triggered when the user selects a suggestion.
   */
  onReady: PropTypes.func.isRequired,
  /**
   * Whether the component should display an error.
   */
  error: PropTypes.bool,
};

export default InputAutocomplete;
