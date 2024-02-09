import { render, screen } from "@testing-library/react";
import UserForm from "./UserForm";
import userEvent from "@testing-library/user-event";

test("It shows two inputs and a button", () => {
  //arrange
  render(<UserForm />);

  // get all the inputs
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("The form is submitted and onUserAdded function called", () => {
  const mock = jest.fn();
  render(<UserForm onUserAdded={mock} />);

  // ACT
  const [nameInput, emailInput] = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  userEvent.click(nameInput);
  userEvent.keyboard("john");

  userEvent.click(emailInput);
  userEvent.keyboard("john@doe.com");

  userEvent.click(button);

  // ASSERT

  expect(mock).toHaveBeenCalledWith({ name: "john", email: "john@doe.com" });
});
