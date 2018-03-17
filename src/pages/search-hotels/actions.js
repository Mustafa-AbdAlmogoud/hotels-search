export const getHotels = () => ({
  type: 'GET_HOTELS',
});

export const filterHotels = (hotels, totalNights) => ({
  type: 'FILTER_HOTELS',
  hotels,
  totalNights,
});
