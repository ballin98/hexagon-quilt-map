import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Homepage from "../containers/Homepage";
import { fireEvent, render } from "@testing-library/react";
import QuiltSection from "../components/QuiltSection";

configure({ adapter: new Adapter() });

it("testRenderApp", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("testRenderHomePage", () => {
  const FieldComponent = shallow(<Homepage />);
  expect(FieldComponent).toMatchSnapshot();
});

it("testRenderRandomImage", () => {
  const FieldComponent = shallow(<QuiltSection props={{ shape: "square" }} />);
  expect(FieldComponent).toMatchSnapshot();
});

it("testHandleInput", () => {
  const spy = jest.fn();
  const { getByTestId } = render(<input data-testid="input" onChange={spy} />);
  const input = getByTestId("input");
  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "23" } });
  expect(spy).toHaveBeenCalledTimes(1);
});

it("testLocalStorage", () => {
  const spy = jest.fn();
  const { getByTestId } = render(<input data-testid="input" onChange={spy} />);
  const input = getByTestId("input");
  localStorage.setItem("test", "test");
  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "23" } });
  expect(localStorage.getItem("test")).toBe("test");
});
