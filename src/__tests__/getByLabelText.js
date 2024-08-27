import { render, screen } from "@testing-library/react";
import GetByLabelText from "../getByLabelText";

it('testing getByLabelText', () => {
    render(<GetByLabelText />)

    const label = screen.getByLabelText("User")
    expect(label).toBeInTheDocument()
    expect(label).toHaveValue("Aniket")
})

it('testing getByLabelText for checkbox', () => {
    render(<GetByLabelText />)

    const skill = screen.getByLabelText("Skills")
    expect(skill).toBeInTheDocument()
    expect(skill).toBeChecked()
})
