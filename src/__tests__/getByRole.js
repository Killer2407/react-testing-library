import { render, screen } from "@testing-library/react";
import Getbyrole from "../getByRole";


it("testing getByRole", () => {
    render(<Getbyrole />)

    const inputType = screen.getByRole("textbox", {name: 'Name' })
    expect(inputType).toBeInTheDocument()
    expect(inputType).toHaveValue("hello")
    expect(inputType).toBeDisabled()
})

it("testing button", () => {
    render(<Getbyrole />)

    const button = screen.getByRole("button", {name: 'Test'})
    expect(button).toBeInTheDocument()
})

it("testing multiple element", () => {
    render(<Getbyrole />)

    const button1 = screen.getByRole("button", {name: "Click One"})
    const input1 = screen.getByRole('textbox', {name: 'User:'})
    const div = screen.getByRole("dummy")
    expect(button1).toBeInTheDocument()
    expect(input1).toBeInTheDocument()
    expect(div).toBeInTheDocument()
})
 