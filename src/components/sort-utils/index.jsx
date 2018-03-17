import React from 'react';
import { Button } from 'antd';
import 'antd/lib/button/style/css';
import { PropTypes } from 'prop-types';

/**
 * SortUtils is presentational component receive two action handler
 * to sort by name and by price
 * @param {Object} props
 */

const SortUtils = props => (
  <div>
    <Button
      style={{ margin: 'auto 15px' }}
      onClick={props.sortByName}
      data-test="name"
    >
      Sort by Name
    </Button>
    <Button
      onClick={props.sortByPrice}
      data-test="price"
    >
      Sort by Price
    </Button>
  </div>
);

SortUtils.propTypes = {
  /**
   * action handler to sort list of hotels by name
   */
  sortByName: PropTypes.func.isRequired,
  /**
   * action handler to sort list of hotels by price
   */
  sortByPrice: PropTypes.func.isRequired,
};

export default SortUtils;
