import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Example from "./ExampleTest";

test("shows the children when the checkbox is checked", () => {
  const testMessage = "Test Message";

  render(<Example>{testMessage}</Example>);

  expect(screen.queryByText(testMessage)).toBeNull();

  fireEvent.click(screen.getByLabelText(/show/i));

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
