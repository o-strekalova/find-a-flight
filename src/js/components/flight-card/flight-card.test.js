import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import FlightCard from "./flight-card.jsx";
import history from "../../history";
import {flights, mockData} from "../mocks";
import {noop} from "../../utils";

it(`Render FlighCard`, () => {
  const tree = renderer.create(
      <Router history={history} >
        <FlightCard
          flight={flights[0]}
          departure={mockData.departure}
          arrival={mockData.arrival}
          favorites={[1]}
          onFavoriteToggleClick={noop}
          key={1}
        />
    </Router>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
