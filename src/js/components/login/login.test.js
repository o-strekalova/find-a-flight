import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import Login from "./login.jsx";
import {noop} from "../../utils";

it(`Login component renders correctly`, () => {

  const tree = renderer.create(
    <Router history={history}>
      <Login
        onSubmit={noop}
      />
    </Router>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
