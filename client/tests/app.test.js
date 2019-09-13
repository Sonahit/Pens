import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../src/App";

afterEach(() => {
  cleanup();
});

test("app should render", () => {
  const container = render(<App />);
  expect(container).toBeDefined();
});

test("dummy test", () => {
  const number = 2 + 2;
  expect(number).toBe(4);
});
