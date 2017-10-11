import React from "react";
import HelloWorld from "./HelloWorld";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

it("should contain a div", () => {
  const wrapper = shallow(<HelloWorld />);
  expect(wrapper.find("div")).toHaveLength(1);
});

it("should display name and age", () => {
  const wrapper = shallow(<HelloWorld firstName="Cory" age={21} />);
  expect(wrapper.contains(<div>Hello Cory 21</div>)).toEqual(true);
});

it("should match snapshot", () => {
  const tree = renderer
    .create(<HelloWorld firstName="Cory" age={21} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
