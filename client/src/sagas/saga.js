import { takeLatest, select, retry, put } from "redux-saga/effects";

export const dataSelector = (state) => state.data;

export function* watcher() {
  yield takeLatest("POST_ORDER", worker);
}

function* worker() {
  try {
    const SECOND = 1000;
    const formData = yield select(dataSelector);
    const response = yield retry(3, 5 * SECOND, (fetch, '/', { body: formData, method: 'POST' })); // yield call(fetch, '/', { body: formData, method: 'POST' });
    const result = response.data.message;

    yield put({ type: "POST_SUCCESS", result });
  
  } catch (error) {
      yield put({ type: "POST_FAILURE", error });
  }
}