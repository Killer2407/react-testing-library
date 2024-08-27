import { render, screen, configure } from "@testing-library/react";
import TestId from "../getTestId";

// configure({testIdAttribute: "element-id"})

it("testing on the component with test by id", () => {
    render(<TestId />)

    const test = screen.getAllByTestId("div-test")
    for(let i = 0; i < test.length; i++) {
        expect(test[i]).toBeInTheDocument()
    }
})

it("testing on the h2 with test by id", () => {
    render(<TestId />)

    const h2 = screen.getByTestId("h2")

    expect(h2).toBeInTheDocument()
})