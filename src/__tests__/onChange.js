import { render, screen } from "@testing-library/react";
import OnChange from "../onChange/onChange";
import userEvent from "@testing-library/user-event";

it("testing for the onChange event", async() => {
    userEvent.setup()
    render(<OnChange />)

    const element = screen.getByRole("textbox")
    await userEvent.type(element, "Aniket")

    expect(screen.getByText("Aniket")).toBeInTheDocument()
})