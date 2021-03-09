import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import FlightsList from "./flights-list.jsx";
import {flights, mockData} from "../mocks";
import {noop} from "../../utils";

it(`Render FlightsList with scroll`, () => {
  const tree = renderer.create(
    <Router history={history}>
      <FlightsList
        departure={mockData.departure}
        arrival={mockData.arrival}
        flights={flights}
        favorites={[2, 4]}
        onFavoriteToggleClick={noop}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render FlightsList without scroll`, () => {
  const tree = renderer.create(
    <Router history={history}>
      <FlightsList
        departure={mockData.departure}
        arrival={mockData.arrival}
        flights={[flights[0]]}
        favorites={[2, 4]}
        onFavoriteToggleClick={noop}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
