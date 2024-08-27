import { screen, render } from "@testing-library/react";
import GetByPlaceHolder from "../getByPlaceHolder";

it("testing get by place holder", () => {
    render(<GetByPlaceHolder />)

    const placeHolder = screen.getByPlaceholderText("enter username")
    expect(placeHolder).toBeInTheDocument()
    expect(placeHolder).toHaveValue("Aniket")
})

it("testing get all by place holder", () => {
    render(<GetByPlaceHolder />)

    const placeHolder = screen.getAllByPlaceholderText("enter password")
    for(let i = 0; i < placeHolder.length; i++) {
        expect(placeHolder[i]).toBeInTheDocument()
        expect(placeHolder[i]).toHaveValue("Aniket")
    }

})
