import { render, screen } from "@testing-library/react";
import App from "../App";

test("Test First React app", () => {
  render(<App />)

  const text = screen.getByText(/First React Test Case/i)
  // const title=screen.getByTitle('tiger')
  expect(text).toBeInTheDocument()
  // expect(title).toBeInTheDocument()
})

test("Testing input box", () => {
  render(<App />)

  let checkInput = screen.getByRole('textbox')
  let checkPlaceholder = screen.getByPlaceholderText('User Name')
  expect(checkInput).toBeInTheDocument()
  expect(checkPlaceholder).toBeInTheDocument()
  expect(checkInput).toHaveAttribute('name','username')
  expect(checkInput).toHaveAttribute('id', 'user')
  expect(checkInput).toHaveAttribute('type', 'text')
  expect(checkInput).toHaveAttribute('value', 'Aniket')
})

describe("UI test case group", () => {
  test('Testing React App', () => {
    render(<App />)

    const text = screen.getByText(/First React Test Case/i)
    // const title=screen.getByTitle('tiger')
    expect(text).toBeInTheDocument()
    // expect(title).toBeInTheDocument()
  })

  test('Input box', () => {
    render(<App />)

  let checkInput = screen.getByRole('textbox')
  let checkPlaceholder = screen.getByPlaceholderText('User Name')
  expect(checkInput).toBeInTheDocument()
  expect(checkPlaceholder).toBeInTheDocument()
  expect(checkInput).toHaveAttribute('name','username')
  expect(checkInput).toHaveAttribute('id', 'user')
  expect(checkInput).toHaveAttribute('type', 'text')
  expect(checkInput).toHaveAttribute('value', 'Aniket')
  })
})
