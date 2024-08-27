import { render, screen } from "@testing-library/react";
import Assertion from "../assertionMethods/assertion";

it("Testing the different assertion methods", () => {
    render(<Assertion />)
    const assert = screen.getByRole("textbox")
    expect(assert).toBeInTheDocument()
    expect(assert).toHaveValue("niket")
    expect(assert).toHaveValue()
    expect(assert).toHaveAttribute("id")
    expect(assert).toHaveAttribute("data-test")
    expect(assert).toHaveClass("test")
    // expect(assert).toBeEnabled()
    expect(assert).toBeDisabled()

})

it("Testing the different negative assertion methods", () => {
    render(<Assertion />)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).not.toHaveClass('haha')
    expect(button).not.toHaveAttribute('data')
    expect(button).not.toBeEnabled()
})
