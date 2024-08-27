import { render, screen } from "@testing-library/react"
import GetAllByLabel from "../getAllByLabel"


it("testing getAllbylabeltext", () => {
    render(<GetAllByLabel />)

    const inputLabel = screen.getAllByLabelText("User")
    const skills = screen.getAllByLabelText("Skills")
    for(let i = 0; i< inputLabel.length; i++) {
        expect(inputLabel[i]).toBeInTheDocument()
        expect(inputLabel[i]).toHaveValue("Anik")
    }

    for(let i = 0; i < skills.length; i++) {
        expect(skills[i]).toBeChecked()
    }
})

it("testing getAllbylabeltext checkbox", () => {
    render(<GetAllByLabel />)

    const skills = screen.getAllByLabelText("Skills")

    for(let i = 0; i < skills.length; i++) {
        expect(skills[i]).toBeChecked()
    }
})
