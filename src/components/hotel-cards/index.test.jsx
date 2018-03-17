import React from 'react';
import { shallow } from 'enzyme';

import HotelCards from './';

let wrapper;

beforeEach(() => {
  const hotels = [
    { name: 'test', price: '20', city: 'alexandria' },
    { name: 'test2', price: '40', city: 'cairo' }];
  const totalNights = 1;
  wrapper = shallow(<HotelCards hotels={hotels} totalNights={totalNights} />);
});

it('should map over hotels array', () => {
  expect(wrapper.children()).toHaveLength(2);
});

it('should render 3 info in each card', () => {
  expect(wrapper.childAt(0).children()).toHaveLength(3);
});
