import { render } from "@testing-library/react";
import SnapShot from "../SnapShot";

it('Snapshot testing for the snapshot', () => {
    const container = render(<SnapShot />)
    expect(container).toMatchSnapshot()
})
