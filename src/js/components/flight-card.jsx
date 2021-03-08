import React from "react";
import {formatDateToEng} from "../utils";

const FlightCard = (props) => {
  const {
    departure,
    arrival,
    flight,
    favorites,
    onFavoriteToggleClick,
  } = props;

  const favoriteButtonClassName = flight.isFavorite ? `card__favorite-button card__favorite-button--liked` : `card__favorite-button`;

  const updateFavorites = (isFavorite, id) => {
    const newFavorites = favorites.slice();

    if (isFavorite) {
      newFavorites.splice(favorites.indexOf(id), 1);
    } else {
      newFavorites.push(id);
    }

    return newFavorites;
  };

  return (
    <li className="flights__item card">
      <div className="card__icon"></div>
      <article className="card__info">
        <h3 className="card__cities">
          <span className="card__departure-city">{departure.city} ({departure.airport})</span>
          <span className="card__arrival-city">{arrival.city} ({arrival.airport})</span>
        </h3>
        <div className="card__date-time">
          {formatDateToEng(flight.date)}
          <span className="card__time">{flight.time}</span>
        </div>
        <div className="card__company">{flight.carrier}</div>
      </article>
      <article className="card__info card__info--price">
        <button className={favoriteButtonClassName} type="button"
          onClick={() => {
            const newFavorites = updateFavorites(flight.isFavorite, flight.id);
            flight.isFavorite = !flight.isFavorite;
            onFavoriteToggleClick(newFavorites);
          }}>
        </button>
        <div className="card__price">
          <h4 className="card__price-title">Price:</h4>
          <span className="card__amount">{flight.price} &#8381;</span>
        </div>
      </article>
    </li>
  );
}

export default React.memo(FlightCard);
