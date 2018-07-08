import { takeLatest, put } from 'redux-saga/effects';

export const UPDATE_MEASUREMENTS = 'UPDATE_MEASUREMENTS';
export function* watcherSaga() {
    yield takeLatest(UPDATE_MEASUREMENTS, updateMeasurements);
}

export const SET_DATA = 'SET_DATA';
function* updateMeasurements({ message }) {
    const data = JSON.parse(message.data);
    yield put({ type: SET_DATA, data });
}
