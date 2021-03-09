import React from "react";
import renderer from "react-test-renderer";
import SimpleSlider from "./slider.jsx";
import {mockData, destinationImages} from "../mocks";

it(`Render SimpleSlider`, () => {
  const tree = renderer.create(
      <SimpleSlider
        destinationImages={destinationImages}
        arrival={mockData.arrival}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
