import reducer from './reducres';

it('should return new state when getHotels action fired', () => {
  const hotels = [
    { name: 'test', price: '20', city: 'alexandria' },
    { name: 'test2', price: '40', city: 'cairo' }];
  expect(reducer({}, { type: 'GET_HOTELS_SUCCESS', hotels })).toEqual({ hotels });
});

it('should return new state when getHotels action fired', () => {
  const filterdHotels = [
    { name: 'test', price: '20', city: 'alexandria' },
    { name: 'test2', price: '40', city: 'cairo' }];
  const totalNights = 1;
  expect(reducer({}, { type: 'FILTER_HOTELS', hotels: filterdHotels, totalNights }))
    .toEqual({ filterdHotels, totalNights });
});

it('should return the same state when no action type match', () => {
  expect(reducer({}, { type: 'UNKOWN' })).toEqual({});
});
