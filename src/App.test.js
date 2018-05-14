import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("should render 1 p element", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-intro").exists()).toBe(true);
  });
  it("should render 3 li elements", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("ul").children().length).toBe(3);
  });
});
