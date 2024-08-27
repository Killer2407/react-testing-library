import { render, screen } from "@testing-library/react"
import AltText from "../altText"

it("testing the alt test", () => {
    render(<AltText />)
    const alt = screen.getByAltText("feather")
    expect(alt).toBeInTheDocument()
})

it("testing the multiple image with alt test", () => {
    render(<AltText />)
    const animalAlt = screen.getAllByAltText("animal")
    for(let i = 0; i < animalAlt.length; i++) {
        expect(animalAlt[i]).toBeInTheDocument()
    }

})
