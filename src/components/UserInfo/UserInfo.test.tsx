import { render, screen } from "@testing-library/react";

import UserInfo from "./UserInfo";

describe("Button", () => {
  it("renders the button with correct text", () => {
    render(<UserInfo name="Renato" occupation="Software Engineer" />);

    expect(screen.getByText("Renato")).toBeDefined();
    expect(screen.getByText("Software Engineer")).toBeDefined();
  });
});
