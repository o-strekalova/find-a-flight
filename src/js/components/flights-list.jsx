import React from "react";
import SimpleBar from "simplebar-react";
import FlightCard from "./flight-card";
import "simplebar/dist/simplebar.min.css";

const SCROLL_FLIGHTS_MIN = 6;

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

export default React.memo(FlightsList);
