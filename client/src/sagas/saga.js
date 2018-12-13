import { takeLatest, select, call, put } from "redux-saga/effects";

export const dataSelector = (state) => state.api.data;

export function* watcher() {
  yield takeLatest("POST_ORDER", worker);
}

function* worker() {
  try {
    const formData = yield select(dataSelector);
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const response = yield call(fetch, `${process.env.REACT_APP_BACKEND_URL}`, { method: 'POST', headers: myHeaders, body: JSON.stringify(formData) });
    //yield retry(3, 5 * 1000, (fetch, '/', { body: formData, method: 'POST' })); 
    const result = response;

    yield put({ type: "POST_SUCCESS", result });
  
  } catch (error) {
      yield put({ type: "POST_FAILURE", error });
  }
}