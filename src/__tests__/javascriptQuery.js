import { render, screen, within } from "@testing-library/react";
import JavaScriptQuery from "../javascriptQuery/javaScriptQuery";


it("testing case with custom query", async() => {
    render(<JavaScriptQuery />)

    const element = document.querySelector("#testid")
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent("Hello World")
    expect(element).toHaveAttribute("id")
})

it("testing case with querying within element", async() => {
    render(<JavaScriptQuery />)

    const parent = screen.getByText("Hi")
    const subParent = within(parent).getByText("Hey What's up")
    expect(parent).toBeInTheDocument()
    expect(subParent).toBeInTheDocument()
})
