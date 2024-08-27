import { fireEvent, render, screen } from "@testing-library/react";
import { AppOne } from "../AppOne";
import { cleanDB } from "../service";


// beforeAll(() => {
//     console.log('Aniket')
// })

beforeEach(() => {
    console.log('Before Each')
    cleanDB()
})
it("Event Change Testing", () => {
    render(<AppOne />)

    const inputText = screen.getByRole("textbox")
    fireEvent.change(inputText, { target: { value: 'a' } })
    expect(inputText.value).toBe("a")
})

it("Button need to be tested", () => {
    render(<AppOne />)

    const button = screen.getByRole("button")
    fireEvent.click(button)

    expect(screen.getByText("Updated Data")).toBeInTheDocument()
})

// afterAll(() => {
//     console.log('After All')
// })

// afterEach(() => {
//     console.log('After All')
// })
