import { takeEvery, put, call } from 'redux-saga/effects';

function* getHotels() {
  const hotels = yield call(() => fetch(process.env.REACT_APP_API_URL).then(data => data.json()));
  yield put({ type: 'GET_HOTELS_SUCCESS', hotels: [...hotels.hotels] });
}

function* mySage() {
  yield takeEvery('GET_HOTELS', getHotels);
}

export default mySage;
