import { render, screen } from "@testing-library/react";
import Form from "./index";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const clickButton = async (buttonName, role = "button") => {
  await userEvent.click(screen.getByRole(role, { name: buttonName }));
};

test("initial conditions", () => {
  render(<Form />);
  expect(screen.getByRole("img")).toBeVisible();
  expect(screen.getByText("Question 01")).toBeVisible();
  expect(screen.getByRole("button")).toBeVisible();
  expect(screen.getByRole("textbox")).toBeVisible();
});

test("initial conditions - hidden questions", () => {
  render(<Form />);
  expect(screen.getByText("Question 02")).not.toBeVisible();
  expect(screen.getByText("Question 03")).not.toBeVisible();
  expect(screen.getByText("Summary")).not.toBeVisible();
});

test("error message in question 01", async () => {
  render(<Form />);
  expect(
    screen.queryByText("Write at least 4 characters!")
  ).not.toBeInTheDocument();
  clickButton("Next");
  expect(await screen.findByText("Write at least 4 characters!")).toBeVisible();
});
