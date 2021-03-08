import "regenerator-runtime/runtime";
import {takeLatest, put, call} from "redux-saga/effects";
import axios from "axios";
import {ActionType, ActionCreator} from "./reducer";
import Flight from "./models/flight";
import {formatDate} from "./utils";

const fetchFlights = (date) => {
  const formatted = formatDate(date);

  return axios.request({
    method: `GET`,
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/ru-RU/SVO-sky/JFK-sky/${formatted}`,
    headers: {
      'x-rapidapi-key': `055e4a8d6fmsh4d7fcfcf2750ebfp1161dbjsn12793ac78bb2`,
      'x-rapidapi-host': `skyscanner-skyscanner-flight-search-v1.p.rapidapi.com`,
    },
    timeout: 5000,
  });
};

function* workerLoadFlights(action) {
  try {
    const response = yield call(fetchFlights, action.date);
    const flights = Flight.parseFlights(response.data);
    yield put(ActionCreator.putFlights(flights));
  } catch (error) {
    yield put(ActionCreator.changeErrorMessage(`Failed to load flights. Try again later`));
  }
}

export function* watchLoadFlights() {
  yield takeLatest(ActionType.LOAD_FLIGHTS, workerLoadFlights);
}
