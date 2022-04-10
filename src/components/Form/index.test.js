import { render, screen } from "@testing-library/react";
import Form from "./index";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const clickButton = async (buttonName, role = "button") => {
  userEvent.click(screen.getByRole(role, { name: buttonName }));
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
  expect(await screen.findByText("Write at least 2 characters!")).toBeVisible();
});

test("Question 01 next button", async () => {
  render(<Form />);
  const input = screen.getByRole("textbox");
  userEvent.type(input, "Testing");
  expect(input.value).toBe("Testing");
  await clickButton("Next");
  expect(await screen.findByText("Question 01")).not.toBeVisible();
  expect(await screen.findByText("Question 02")).toBeVisible();
});

test("page 2 elements", async () => {
  render(<Form />);
  userEvent.type(screen.getByRole("textbox"), "Testing");
  await clickButton("Next");

  // logo
  expect(screen.getByRole("img")).toBeVisible();

  // question numbers
  expect(await screen.findByText("Question 01")).not.toBeVisible();
  expect(await screen.findByText("Question 02")).toBeVisible();

  // inputs
  expect(screen.getByRole("combobox")).toBeVisible();
  expect(screen.getByRole("option", { name: "Javascript" })).toBeVisible();
  expect(screen.getByRole("option", { name: "Python" })).toBeVisible();
  expect(screen.getByRole("option", { name: "C++" })).toBeVisible();

  // buttons
  expect(screen.getByRole("button", { name: "Previous" })).toBeVisible();
  expect(screen.getByRole("button", { name: "Next" })).toBeVisible();
});

test("page 2 error", async () => {
  render(<Form />);
  userEvent.type(screen.getByRole("textbox"), "Testing");
  await clickButton("Next");
  await clickButton("Next");
  expect(await screen.findByText("You must choose an option")).toBeVisible();
});

test("page 2 previous button", async () => {
  render(<Form />);
  userEvent.type(screen.getByRole("textbox"), "Testing");
  await clickButton("Next");
  await clickButton("Previous");
  expect(screen.getByText("Question 01")).toBeVisible();
  expect(screen.getByText("Question 02")).not.toBeVisible();
});

test("Question 02 Next button", async () => {
  render(<Form />);
  userEvent.type(screen.getByRole("textbox"), "Testing");
  await clickButton("Next");
  userEvent.selectOptions(screen.getByRole("combobox"), ["Javascript"]);
  await clickButton("Next");
  expect(screen.getByText("Question 03")).toBeVisible();
  expect(screen.getByText("Question 02")).not.toBeVisible();
});

test("Question 03 elements", async () => {
  render(<Form />);
  userEvent.type(screen.getByRole("textbox"), "Testing");
  await clickButton("Next");
  userEvent.selectOptions(screen.getByRole("combobox"), ["Javascript"]);
  await clickButton("Next");

  // logo
  expect(screen.getByRole("img")).toBeVisible();

  // question numbers
  expect(await screen.findByText("Question 01")).not.toBeVisible();
  expect(await screen.findByText("Question 02")).not.toBeVisible();
  expect(await screen.findByText("Question 03")).toBeVisible();

  // inputs
  expect(screen.getByRole("radio", { name: "React" })).toBeVisible();
  expect(screen.getByRole("radio", { name: "Angular" })).toBeVisible();
  expect(screen.getByRole("radio", { name: "Vue" })).toBeVisible();

  // buttons
  expect(screen.getByRole("button", { name: "Previous" })).toBeVisible();
  expect(screen.getByRole("button", { name: "Submit" })).toBeVisible();
});

test("Question 03 error", async () => {
  render(<Form />);
  userEvent.type(screen.getByRole("textbox"), "Testing");
  await clickButton("Next");
  userEvent.selectOptions(screen.getByRole("combobox"), ["Javascript"]);
  await clickButton("Next");
  await clickButton("Submit");
  expect(await screen.findByText("You must choose an option!")).toBeVisible();
});

test("Question 03 previous button", async () => {
  render(<Form />);
  userEvent.type(screen.getByRole("textbox"), "Testing");
  await clickButton("Next");
  userEvent.selectOptions(screen.getByRole("combobox"), ["Javascript"]);
  await clickButton("Next");
  await clickButton("Previous");
  expect(screen.getByText("Question 02")).toBeVisible();
  expect(screen.getByText("Question 03")).not.toBeVisible();
});

test("Question 03 Submit button", async () => {
  render(<Form />);
  userEvent.type(screen.getByRole("textbox"), "Testing");
  await clickButton("Next");
  userEvent.selectOptions(screen.getByRole("combobox"), ["Javascript"]);
  await clickButton("Next");
  await clickButton("React", "radio");
  await clickButton("Submit");
  expect(screen.getByText("Question 03")).not.toBeVisible();
  expect(await screen.findByText("Summary")).toBeVisible();
});

test("Summary elements", async () => {
  render(<Form />);
  userEvent.type(screen.getByRole("textbox"), "Testing");
  await clickButton("Next");
  userEvent.selectOptions(screen.getByRole("combobox"), ["Javascript"]);
  await clickButton("Next");
  userEvent.click(screen.getByRole("radio", { name: "React" }));
  userEvent.click(screen.getByRole("button", { name: "Submit" }));

  // Page Title
  expect(await screen.findByText("Summary")).toBeVisible();
  expect(await screen.findByText("Congratulations")).toBeVisible();

  // Buttons
  expect(screen.getByRole("button", { name: "Previous" })).toBeVisible();
  expect(screen.getByRole("button", { name: "Start again" })).toBeVisible();
});

test("Restarting questionnaire", async () => {
  render(<Form />);
  userEvent.type(screen.getByRole("textbox"), "Testing");
  await clickButton("Next");
  userEvent.selectOptions(screen.getByRole("combobox"), ["Javascript"]);
  await clickButton("Next");
  await clickButton("React", "radio");
  await clickButton("Submit");
  await clickButton("Start again");
  expect(await screen.findByText("Summary")).not.toBeVisible();
  expect(await screen.findByText("Question 01")).toBeVisible();
});
