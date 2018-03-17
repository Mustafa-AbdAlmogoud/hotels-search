import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style/css';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getHotels, filterHotels } from './actions';
import tajawal from '../../pictures/tajawal.png';
import styles from './style.scss';

const moment = extendMoment(Moment);

class SearchHotel extends Component {
  static propTypes = {
    getHotels: PropTypes.func,
    filterHotels: PropTypes.func,
    hotels: PropTypes.arrayOf,
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
  }
  static defaultProps = {
    getHotels: () => { },
    filterHotels: () => { },
    hotels: [],
    history: {
      push: () => {},
    },
  }
  componentDidMount() {
    this.props.getHotels();
  }
  changeDate = (dates) => {
    const filterdHotels = this.props.hotels.filter((hotel) => {
      const availabl = hotel.availability.filter((availabiltyDate) => {
        const availableFrom = new Date(availabiltyDate.from);
        const availableTo = new Date(availabiltyDate.to);
        return dates[0] >= availableFrom && dates[0] <= availableTo &&
               dates[1] >= availableFrom && dates[1] <= availableTo;
      });
      if (availabl.length > 0) { return true; }
      return false;
    });
    const totalNights = moment(dates[1]).diff(moment(dates[0]), 'days');
    this.props.filterHotels(filterdHotels, totalNights);
    this.props.history.push('/hotels');
  }
  render() {
    return (
      <div>
        <img className={styles.img} src={tajawal} alt="tajawal" />
        <DatePicker.RangePicker
          className={styles.datePicker}
          ranges={{
            Today: [moment(), moment()],
            'This Month': [moment(), moment().endOf('month')],
          }}
          onChange={this.changeDate}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getHotels,
    filterHotels,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchHotel));
