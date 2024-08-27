import { fireEvent, render, screen } from "@testing-library/react";
import { Functional } from "../functional";
import { handleOther } from "../helper";

it("Method testing case 1", () => {
    render(<Functional/>)

    const button = screen.getByTestId("btn-1")
    fireEvent.click(button)

    expect(screen.getByText("Hello testing is going on")).toBeInTheDocument()
})

it("Method testing case 2", () => {
    expect(handleOther()).toMatch('Hi')
})
