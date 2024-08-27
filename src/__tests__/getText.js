import { render, screen } from "@testing-library/react"
import GetByText from "../getText"

it("single button testing", () => {
    render(<GetByText />)
    const button = screen.getByText("Login")
    expect(button).toBeInTheDocument()
})

it("single p tag testing", () => {
    render(<GetByText />)
    const pTag = screen.getByText("Testing")
    expect(pTag).toBeInTheDocument()
    expect(pTag).toHaveClass("paraStyle")
    expect(pTag).toHaveAttribute("id")

})

it("single h1 tag testing", () => {
    render(<GetByText />)
    const h1Tag = screen.getByText("RTL Query: Get By Text")
    expect(h1Tag).toBeInTheDocument()
})

// it("multiple button testing", () => {
//     render(<GetByText />)
//     const button = screen.getAllByText("User Name")
//     for(let i = 0; i < button.length; i++) {
//         expect(button[i]).toBeInTheDocument()
//     }
    
// })

// it("multiple p tag testing", () => {
//     render(<GetByText />)
//     const pTag = screen.getAllByText("Testing for P Tag")

//     for(let i = 0; i < pTag.length; i++) {
//         expect(pTag[i]).toBeInTheDocument()
//     }
// })

// it("multiple h1 tag testing", () => {
//     render(<GetByText />)
//     const h1 = screen.getAllByText("RTL Query: Get All By Text")
//     for(let i = 0; i < h1.length; i++) {
//         expect(h1[i]).toBeInTheDocument()
//     }
// })