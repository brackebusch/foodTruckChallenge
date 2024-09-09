import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const headerElement = screen.getByText(/food truck public safety/i);
  expect(headerElement).toBeInTheDocument();
});
