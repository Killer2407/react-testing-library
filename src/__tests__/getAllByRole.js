import { render, screen } from "@testing-library/react";
import GetAllbyrole from "../getAllByRole";

it("testing getAllbyRole", () => {
    render(<GetAllbyrole />)

    const buttons = screen.getAllByRole("button")
    const options = screen.getAllByRole("option")
    for(let i = 0; i<buttons.length; i++) {
        expect(buttons[i]).toBeInTheDocument()
    }
    for(let i = 0; i<options.length; i++) {
        expect(options[i]).toBeInTheDocument()
    }
})
