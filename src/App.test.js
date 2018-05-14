import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("should has a h1 with text 'Welcome to React'", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toBe("Welcome to React");
  });

  it("matches the snapshot", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
