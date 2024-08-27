import { render, screen } from "@testing-library/react";
import TextMatch from "../TextMatchRegex/textMatch";

it("testing on the text", () => {
    render(<TextMatch />)

    // const textString = screen.getByText("Hello World", {exact:false})
    // const textString = screen.getByText("hello World", {exact:false})
    const textString = screen.getByText("Hello", {exact:false})
    expect(textString).toBeInTheDocument()
})

it("testing on the text case with regex", () => {
    render(<TextMatch />)

    // const regex = screen.getByText(/Hello World/)
    // const regex = screen.getByText(/lo Wor/)
    // const regex = screen.getByText(/hello/i)
    const regex = screen.getByText(/hello w?orld/i)

    expect(regex).toBeInTheDocument()
})

it("testing text match with function", () => {
    render(<TextMatch />)

    // const func = screen.getByText((content, element)=>content.startsWith("Hello"))
    // const func = screen.getByText((content, element)=>content.endsWith("World"))
    // const func = screen.getByText((content, element)=>content.endsWith("ld"))
    // const func = screen.getByText((content, element)=>{
    //     return content.includes("World")
    // })
    const func = screen.getByText((content, element)=>{
        return content.length == 11
    })
    expect(func).toBeInTheDocument()
})
