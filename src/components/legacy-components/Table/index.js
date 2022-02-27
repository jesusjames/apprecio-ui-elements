/**
 *
 * Table
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import theme from '../../utils/theme';

const Container = styled.div`
  width: ${theme.width.default};
  margin: ${theme.spacing[2]} ${theme.spacing[0]} ${theme.spacing[2]}
    ${theme.spacing[0]};

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacing[2]};
    border-radius: 8px;

    & > div:first-child {
      font-family: ${theme.typeface.default};
      font-size: 15px;
      color: ${theme.palette.text.darker};
      letter-spacing: -0.2px;
    }

    & > div:last-child {
      font-family: ${theme.typeface.default};
      font-size: 15px;
      font-weight: 600;
      color: ${theme.palette.text.black};
      letter-spacing: -0.2px;
    }
  }

  & > div:nth-child(odd) {
    background-color: ${theme.palette.background.offWhite};
  }
`;

function Table({ rows }) {
  return (
    <Container>
      {rows.map(row => (
        <div>
          {row.map(value => (
            <div>{value}</div>
          ))}
        </div>
      ))}
    </Container>
  );
}

Table.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Table;
