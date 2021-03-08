import React from "react";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Login from "./login";
import FlightsPage from "./flights-page";
import {ActionCreator} from "../reducer";
import history from "../history";
import {AppRoute, AuthStatus} from "../utils";

const App = (props) => {
  const {
    authStatus,
    departure,
    arrival,
    destinationImages,
    date,
    flights,
    favorites,
    errorMessage,
    onAuthFormSubmit,
    onLogout,
    onDateChange,
    onFavoriteToggleClick
  } = props;

  return (
    <Router
      history={history}
    >
      <Switch>
        <Route exact path={AppRoute.LOGIN}
          render={() => {
            return (
              authStatus === AuthStatus.NO_AUTH ?
                <Login
                  onSubmit={onAuthFormSubmit}
                />
                : <Redirect to={AppRoute.FLIGHTS} />
            );
          }}>
        </Route>
        <Route exact path={AppRoute.FLIGHTS}
          render={() => {
            return (
              authStatus === AuthStatus.AUTH ?
                <FlightsPage
                  authStatus={authStatus}
                  departure={departure}
                  arrival={arrival}
                  destinationImages={destinationImages}
                  date={date}
                  flights={flights}
                  favorites={favorites}
                  errorMessage={errorMessage}
                  onDateChange={onDateChange}
                  onLogout={onLogout}
                  onFavoriteToggleClick={onFavoriteToggleClick}
                />
                : <Redirect to={AppRoute.LOGIN} />
            );
          }}
        />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  authStatus: state.authStatus,
  departure: state.departure,
  arrival: state.arrival,
  destinationImages: state.destinationImages,
  date: state.date,
  flights: state.flights,
  favorites: state.favorites,
  errorMessage: state.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  onAuthFormSubmit() {
    dispatch(ActionCreator.changeAuthStatus(AuthStatus.AUTH));
  },
  onLogout() {
    dispatch(ActionCreator.changeAuthStatus(AuthStatus.NO_AUTH));
  },
  onDateChange(date) {
    dispatch(ActionCreator.changeDate(date));
    dispatch(ActionCreator.updateFavorites([]));
    dispatch(ActionCreator.loadFlights(date));
  },
  onFavoriteToggleClick(favorites) {
    dispatch(ActionCreator.updateFavorites(favorites));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
