import { render, screen } from "@testing-library/react";
import MockServices from "../mockService/mockService";

it("testing on mock service", () => {
    render(<MockServices />)

    const element = screen.findAllByRole("heading")
    expect(element).toBeInTheDocument()
})
