import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("specs are running", () => {
  render(<App />);
  expect(true).toBe(true);
});
