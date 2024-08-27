import { render, screen } from "@testing-library/react";
import DisplayValue from "../displayValue";

it("testing on display value", () => {
    render(<DisplayValue />)

    const input = screen.getAllByDisplayValue("Aniket")
    for(let i = 0; i < input.length; i++) {
        expect(input[i]).toBeInTheDocument()
    }
})

it("testing on textArea with display value", () => {
    render(<DisplayValue />)

    const inputArea = screen.getByDisplayValue("Aniket Munim")
    expect(inputArea).toBeInTheDocument()
})

it("testing on radio with display value", () => {
    render(<DisplayValue />)

    const radio = screen.getByDisplayValue("Male")
    expect(radio).toBeInTheDocument()
})