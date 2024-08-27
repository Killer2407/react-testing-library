import { render, screen } from "@testing-library/react";
import FindBy from "../findBy/findBy";

it("testing element with findBy", async() => {
    render(<FindBy />)

    const element = await screen.findByText("Data found",{ }, {timeout: 4000})
    expect(element).toBeInTheDocument()
})
