import React, {useEffect} from "react";
import PropTypes from "prop-types";
import history from "../history";
import FlightsList from "./flights-list";
import SimpleSlider from "./slider";
import ErrorMessage from "./error-message";
import {AppRoute, formatDate, formatDateToRus} from "../utils";

const FlightsPage = (props) => {
  const {
    departure,
    arrival,
    destinationImages,
    date,
    flights,
    favorites,
    errorMessage,
    onLogout,
    onDateChange,
    onFavoriteToggleClick,
  } = props;

  useEffect(() => {
    onDateChange(date);
  }, []);

  return (
    <main className="page__main">
      <button className="page__log-out" type="submit"
        onClick={() => {
          sessionStorage.clear();
          onLogout();
          history.push(AppRoute.LOGIN);
        }}
      >
        Выйти
      </button>
      <section className="page__flights flights">
        <div className="flights__wrap">
          <h1 className="flights__title">
            Вылеты
            <span className="flights__airports">{departure.airport} - {arrival.airport}</span>
          </h1>
          <div className="flights__date date" action="#" method="post">
            <label className="date__label" htmlFor="date">{formatDateToRus(date)}</label>
            <input className="date__picker visually-hidden" type="date" name="date" id="date"
              min={formatDate(new Date())} defaultValue={formatDate(date)} required
              onChange={(evt) => {
                const newDate = new Date(evt.target.value);
                onDateChange(newDate);
              }}
            />
          </div>
        </div>
        <div className="flights__slider-wrap">
          <ul className="flights__slider slider">
            <SimpleSlider
              destinationImages={destinationImages}
              arrival={arrival}
            />
          </ul>
        </div>
        <FlightsList
          departure={departure}
          arrival={arrival}
          flights={flights}
          favorites={favorites}
          onFavoriteToggleClick={onFavoriteToggleClick}
        />
      </section>
      <ErrorMessage
        errorMessage={errorMessage}
      />
    </main>
  );
}

FlightsPage.propTypes = {
  departure: PropTypes.shape({
    city: PropTypes.string.isRequired,
    airport: PropTypes.string.isRequired,
  }),
  arrival: PropTypes.shape({
    city: PropTypes.string.isRequired,
    airport: PropTypes.string.isRequired,
  }),
  destinationImages: PropTypes.arrayOf(PropTypes.string.isRequired),
  date: PropTypes.instanceOf(Date).isRequired,
  flights: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      carrier: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })
  ),
  favorites: PropTypes.arrayOf(PropTypes.number),
  errorMessage: PropTypes.string,
  onLogout: PropTypes.func,
  onDateChange: PropTypes.func,
  onFavoriteToggleClick: PropTypes.func,
};

export default React.memo(FlightsPage);
