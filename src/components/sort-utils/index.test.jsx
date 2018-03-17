import React from 'react';
import { shallow } from 'enzyme';

import SortUtils from './index';


it('show render two childrens', () => {
  const wrapper = shallow(<SortUtils />);
  expect(wrapper.children()).toHaveLength(2);
});

it('show call sortByName when click on sort by name button', () => {
  const sortByName = jest.fn();
  const wrapper = shallow(<SortUtils sortByName={sortByName} />);
  wrapper.find('[data-test="name"]').simulate('click');
  expect(sortByName.mock.calls.length).toBe(1);
});

it('show call sortByPrice when click on sort by price button', () => {
  const sortByPrice = jest.fn();
  const wrapper = shallow(<SortUtils sortByPrice={sortByPrice} />);
  wrapper.find('[data-test="price"]').simulate('click');
  expect(sortByPrice.mock.calls.length).toBe(1);
});

