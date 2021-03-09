import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import FlightsPage from "./flights-page.jsx";
import history from "../../history";
import {flights, mockData, destinationImages} from "../mocks";
import {noop} from "../../utils";

it(`Render FlightsPage for authorized user`, () => {
  const tree = renderer.create(
        <Router history={history}>
          <FlightsPage
            departure={mockData.departure}
            arrival={mockData.arrival}
            destinationImages={destinationImages}
            date={mockData.date}
            flights={flights}
            favorites={[1]}
            errorMessage={null}
            onDateChange={noop}
            onLogout={noop}
            onFavoriteToggleClick={noop}
          />
        </Router>, {
          createNodeMock: () => {
            return document.createElement(`DIV`);
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render FlightsPage with Error`, () => {
  const tree = renderer.create(
        <Router history={history}>
          <FlightsPage
            departure={mockData.departure}
            arrival={mockData.arrival}
            destinationImages={destinationImages}
            date={mockData.date}
            flights={[]}
            favorites={[]}
            errorMessage={`Failed to load flights. Try again later`}
            onDateChange={noop}
            onLogout={noop}
            onFavoriteToggleClick={noop}
          />
        </Router>, {
          createNodeMock: () => {
            return document.createElement(`DIV`);
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
