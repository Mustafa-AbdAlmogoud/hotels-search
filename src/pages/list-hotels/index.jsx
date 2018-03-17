import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import 'antd/lib/input/style/css';

import SortUtils from '../../components/sort-utils';
import HotelCards from '../../components/hotel-cards';
import styles from './style.scss';

class ListHotels extends Component {
  static propTypes = {
    filterdHotels: PropTypes.arrayOf,
    totalNights: PropTypes.number,
  }
  static defaultProps = {
    filterdHotels: [],
    totalNights: 0,
  }
  state = {
    filterdHotels: this.props.filterdHotels || [],
  }
  handleSearch = (hotelName) => {
    this.setState({
      filterdHotels: this.props.filterdHotels.filter(hotel =>
        (hotel.name).toLowerCase() === hotelName.toLowerCase()),
    });
  }
  sortByName = () => {
    this.setState({
      filterdHotels: this.props.filterdHotels.sort((hotel1, hotel2) =>
        hotel1.name - hotel2.name),
    });
  }
  sortByPrice = () => {
    this.setState({
      filterdHotels: this.props.filterdHotels.sort((hotel1, hotel2) =>
        hotel1.price - hotel2.price),
    });
  }
  render() {
    return (
      <div>
        { this.state.filterdHotels.length !== 0 ?
          <div className={styles.container}>
            <div>
              <Input.Search
                className={styles.searchInput}
                placeholder="Hotel Name"
                onSearch={this.handleSearch}
              />
            </div>
            <div>
              <div className={styles.sortBar}>
                <p className={styles.info}>
                  Total Nights {this.props.totalNights}
                </p>
                <SortUtils
                  sortByName={this.sortByName}
                  sortByPrice={this.sortByPrice}
                />
              </div>
              <HotelCards
                hotels={this.state.filterdHotels}
                totalNights={this.props.totalNights}
              />
            </div>
          </div>
          :
          <h1 style={{
               position: 'absolute',
               top: '40%',
               left: '35%',
               opacity: '.5',
               }}
          >
            Sorry there is no available hotels
          </h1>
       }
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });


export default connect(mapStateToProps)(ListHotels);
