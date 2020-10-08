import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPets(action) {
    console.log('got an action:', action);
    let response = yield axios({
        method: 'GET',
        url: '/api/pet'
    });

    yield put({
        type: 'SET_PETS',
        payload: response.data
    });
}

function* petSaga() {
    yield takeLatest('FETCH_PETS', fetchPets);
}
  
export default petSaga;