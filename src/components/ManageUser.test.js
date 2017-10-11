import React from "react";
import ManageUser from "./ManageUser";
import renderer from "react-test-renderer";

it("should render edit header when existing user is provided", () => {
  const user = { id: 1, firstname: "test", lastName: "user" };
  const tree = renderer
    .create(<ManageUser user={user} save={jest.fn} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render add header when empty user is provided", () => {
  const user = { id: null, firstname: null, lastName: null };
  const tree = renderer
    .create(<ManageUser user={user} save={jest.fn} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
