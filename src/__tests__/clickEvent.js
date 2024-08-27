import { render, screen } from "@testing-library/react";
import ClickEvent from "../clickEvent/clickEvent";
import userEvent from "@testing-library/user-event";

it("testing the click event with user event library", async() => {
    userEvent.setup()
    render(<ClickEvent />)

    const button =  screen.getByText("Fire me")
    await userEvent.click(button)
    expect(screen.getByText("Hello")).toBeInTheDocument()
})
