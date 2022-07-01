import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

it("renders hello message", () => {
  render(<App />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
