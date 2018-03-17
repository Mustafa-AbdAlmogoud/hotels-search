import React from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style/css';
import { PropTypes } from 'prop-types';

import styles from './style.scss';

/**
 * HotelsCards is presentational component receive hotels list and display each hotel
 * in seperate card, each card contains of 3 info
 *  name, price, city
 * @param {Object} props
 */

const HotelCards = props => (
  <div className={styles.cardsContainer}>
    {
    props.hotels.map(hotel =>
      (
        <Card className={styles.card}>
          <p>
            <span>Name: </span>
            {hotel.name}
          </p>
          <p>
            <span>Price: </span>
            {props.totalNights * hotel.price}
          </p>
          <p>
            <span>City: </span>
            {hotel.city}
          </p>
        </Card>))
    }
  </div>
);

HotelCards.propTypes = {
  /**
   * list of hotels that will display
   */
  hotels: PropTypes.arrayOf.isRequired,
  /**
   * number of nights user will stay in hotels
   */
  totalNights: PropTypes.number.isRequired,
};

export default HotelCards;
