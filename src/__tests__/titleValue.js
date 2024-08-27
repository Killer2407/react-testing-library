import { render, screen } from "@testing-library/react"
import TitleValue from "../titleValue"

it("testing by title value attribute", () => {
    render(<TitleValue />)

    const titleInput = screen.getByTitle("testing")
    expect(titleInput).toBeInTheDocument()
})

it("testing by span title value attribute", () => {
    render(<TitleValue />)

    const spanTitle = screen.getAllByTitle("emoji")
    for(let i = 0; i < spanTitle.clientHeight; i++) {
        expect(spanTitle[i]).toBeInTheDocument()
    }
    
    
})
