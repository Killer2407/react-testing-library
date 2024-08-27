import { sum } from "./sum";

test("testing for sum function", () => {
    let a = 10
    let b = 30
    let output = 40
    expect(sum(a, b)).toBe(output)
})
