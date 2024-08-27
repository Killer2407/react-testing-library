import { act, render, screen } from "@testing-library/react";
import ActFunction from "../actFunction/actFunction";
import userEvent from "@testing-library/user-event";

it("testing the act function", async() => {
    userEvent.setup()
    render(<ActFunction />)

    const element = screen.getByRole("textbox")
    await act(async() => {
        await userEvent.type(element, "Aniket")
    }) 
    expect(screen.getByText("Aniket")).toBeInTheDocument()
})
