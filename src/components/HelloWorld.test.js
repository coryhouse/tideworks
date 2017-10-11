import React from "react";
import HelloWorld from "./HelloWorld";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

// Example of searching the DOM content via Enzyme
it("should contain a div", () => {
  const wrapper = shallow(<HelloWorld />);
  expect(wrapper.find("div")).toHaveLength(1);
});

// Example of checking DOM content via Enzyme
it("should display name and age", () => {
  const wrapper = shallow(<HelloWorld firstName="Cory" age={21} />);
  expect(wrapper.contains(<div>Hello Cory 21</div>)).toEqual(true);
});

// Snapshot example - Avoid generic test descriptions like this
// Strive to write multiple snapshot tests per component
// that test different permutations of prop settings.
it("should match snapshot", () => {
  const tree = renderer
    .create(<HelloWorld firstName="Cory" age={21} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Example of testing method on component
describe("add", () => {
  it("should return 3 when passed 1 and 2", () => {
    const wrapper = shallow(<HelloWorld />);
    const result = wrapper.instance().add(1, 2);
    expect(result).toEqual(3);
  });
});
