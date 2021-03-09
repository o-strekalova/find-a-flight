import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {App} from "./app.jsx";
import {flights, mockData, destinationImages} from "../mocks";
import {AuthStatus, noop} from "../../utils";

const mockStore = configureStore([]);

it(`Render App for unauthorized user`, () => {
  const store = mockStore({});

  const tree = renderer.create(
    <Provider store={store}>
      <App
        authStatus={AuthStatus.NO_AUTH}
        departure={mockData.departure}
        arrival={mockData.arrival}
        destinationImages={destinationImages}
        date={mockData.date}
        flights={[]}
        favorites={[]}
        errorMessage={null}
        onSubmit={noop}
        onDateChange={noop}
        onLogout={noop}
        onFavoriteToggleClick={noop}
      />
    </Provider>, {
      createNodeMock: () => {
        return document.createElement(`DIV`);
      }
    })
  .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render App for authorized user`, () => {
  const store = mockStore({});

  const tree = renderer.create(
    <Provider store={store}>
      <App
        authStatus={AuthStatus.AUTH}
        departure={mockData.departure}
        arrival={mockData.arrival}
        destinationImages={destinationImages}
        date={mockData.date}
        flights={flights}
        favorites={[3]}
        errorMessage={null}
        onSubmit={noop}
        onDateChange={noop}
        onLogout={noop}
        onFavoriteToggleClick={noop}
      />
    </Provider>, {
      createNodeMock: () => {
        return document.createElement(`DIV`);
      }
    })
  .toJSON();

  expect(tree).toMatchSnapshot();
});
