import React from "react";
import PropTypes from "prop-types";
import SimpleBar from "simplebar-react";
import FlightCard from "./flight-card";
import "simplebar/dist/simplebar.min.css";

const FlightsList = (props) => {
  const {
    departure,
    arrival,
    flights,
    favorites,
    onFavoriteToggleClick,
  } = props;

  return (
    <div className="flights__list-wrap" >
      <h2 className="flights__favorited">
        Добавлено в Избранное:
        <span className="flights__favorited--number"> {favorites.length} </span>
        рейсов
      </h2>
      <SimpleBar style={{height: '515px'}}>
        <ul className="flights__list">
          {flights.map((flight) => {
            return <FlightCard
              flight={flight}
              departure={departure}
              arrival={arrival}
              favorites={favorites}
              onFavoriteToggleClick={onFavoriteToggleClick}
              key={flight.id}
            />
          })}
        </ul>
      </SimpleBar>
    </div>
  );
}

FlightsList.propTypes = {
  departure: PropTypes.shape({
    city: PropTypes.string.isRequired,
    airport: PropTypes.string.isRequired,
  }),
  arrival: PropTypes.shape({
    city: PropTypes.string.isRequired,
    airport: PropTypes.string.isRequired,
  }),
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
  onFavoriteToggleClick: PropTypes.func,
};


export default React.memo(FlightsList);
