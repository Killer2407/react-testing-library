import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PropsComponent from "../functionProps/propsFunction"

it("Testing function props", async() => {
    const testFunction = jest.fn()
    userEvent.setup()
    render(<PropsComponent testFunction={testFunction}/>)

    const button = screen.getByRole("button")
    await userEvent.click(button)

    expect(testFunction).toBeCalled()
})