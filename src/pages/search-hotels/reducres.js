export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_HOTELS_SUCCESS':
      return Object.assign({}, state, { hotels: action.hotels });
    case 'FILTER_HOTELS':
      return Object.assign(
        {}, state,
        {
          filterdHotels: action.hotels,
          totalNights: action.totalNights,
        },
      );
    default:
      return state;
  }
};
