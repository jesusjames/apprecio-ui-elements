/**
 *
 * ProductList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import theme from '../../utils/theme';

const Container = styled.div`
  overflow-y: scroll;
  height: 150px;
  width: 345px;

  ul {
    list-style: none;
    padding-left: ${theme.spacing[2]};
    padding-right: ${theme.spacing[2]};
    margin: ${theme.spacing[2]} ${theme.spacing[0]};

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: ${theme.spacing[2]};
    }

    li p {
      margin: ${theme.spacing[0]} !important;
      color: ${theme.palette.white};
      font-family: ${theme.typeface.default};
      font-weight: 500;
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`;

function ProductList({ data }) {
  return (
    <Container>
      <ul>
        {data.map(datus => (
          <li>
            <p>{datus.productName}</p>
            <p>
              $
              {datus.sellingPrice
                ? datus.sellingPrice.toFixed(2)
                : datus.purchasePrice.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

ProductList.propTypes = {
  data: PropTypes.array,
};

export default ProductList;
