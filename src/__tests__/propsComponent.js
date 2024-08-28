import { render, screen } from "@testing-library/react";
import User from "../testComponent/User";

it("Testing the component props", () => {
    const name = "Aniket"
    render(<User name={name}/>)

    const user = screen.getByText(`UserName: ${name}`)
    expect(user).toBeInTheDocument()
})
