import { render, screen } from "@testing-library/react";
import QueryBy from "../queryBy/queryBy";

it("Testing the component with queryBY", () => {
    render(<QueryBy />)
    const div = screen.getByText("Logout")
    const divLog = screen.queryByText("Login")

    expect(div).toBeInTheDocument()
    expect(divLog).not.toBeInTheDocument()
})