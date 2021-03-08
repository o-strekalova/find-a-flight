import {extend, getAuthStatus, destinationImages} from "./utils";

const initialState = {
  authStatus: getAuthStatus(),
  departure: {
    city: `Moscow`,
    airport: `SVO`,
  },
  arrival: {
    city: `New York City`,
    airport: `JFK`,
  },
  destinationImages,
  date: new Date(),
  flights: [],
  favorites: [],
  errorMessage: null,
};

const ActionType = {
  CHANGE_DATE: `CHANGE_DATE`,
  LOAD_FLIGHTS: `LOAD_FLIGHTS`,
  UPDATE_FAVORITES: `UPDATE_FAVORITES`,
  PUT_FLIGHTS: `PUT_FLIGHTS`,
  CHANGE_ERROR_MESSAGE: `CHANGE_ERROR_MESSAGE`,
  CHANGE_AUTH_STATUS: `CHANGE_AUTH_STATUS`,
};

const ActionCreator = {
  changeAuthStatus: (status) => {
    return {
      type: ActionType.CHANGE_AUTH_STATUS,
      payload: status,
    };
  },

  changeDate: (date) => {
    return {
      type: ActionType.CHANGE_DATE,
      payload: date,
    };
  },

  loadFlights: (date) => {
    return {
      type: ActionType.LOAD_FLIGHTS,
      date,
    };
  },

  putFlights: (flights) => {
    return {
      type: ActionType.PUT_FLIGHTS,
      payload: flights,
    };
  },

  updateFavorites: (favorites) => {
    return {
      type: ActionType.UPDATE_FAVORITES,
      payload: favorites,
    };
  },

  changeErrorMessage: (message) => {
    return {
      type: ActionType.CHANGE_ERROR_MESSAGE,
      payload: message,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTH_STATUS:
      return extend(state, {
        authStatus: action.payload,
      });

    case ActionType.CHANGE_DATE:
      return extend(state, {
        date: action.payload,
      });

    case ActionType.PUT_FLIGHTS:
      return extend(state, {
        flights: action.payload,
      });

    case ActionType.UPDATE_FAVORITES:
      return extend(state, {
        favorites: action.payload,
      });

    case ActionType.CHANGE_ERROR_MESSAGE:
      return extend(state, {
        errorMessage: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
