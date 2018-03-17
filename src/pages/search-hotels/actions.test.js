import { getHotels, filterHotels } from './actions';

it('should fire action with get hotels type when call getHotels', () => {
  expect(getHotels()).toEqual({ type: 'GET_HOTELS' });
});

it('should fire action with filter hotels type when call filterHotels', () => {
  const hotels = [
    { name: 'test', price: '20', city: 'alexandria' },
    { name: 'test2', price: '40', city: 'cairo' }];
  const totalNights = 1;
  expect(filterHotels(hotels, totalNights)).toEqual({ type: 'FILTER_HOTELS', hotels, totalNights });
});
