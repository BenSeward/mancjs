import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("should have an image", () => {
    const { getByTestId } = render(<Header />);
    const logoImg = getByTestId("header-logo-image");

    expect(logoImg).toBeDefined();
    expect(logoImg).toHaveAttribute("src");
  });

  it("should have an alt tag", () => {
    const { getByTestId } = render(<Header />);
    const logoImg = getByTestId("header-logo-image");

    expect(logoImg).toHaveAttribute("alt", "mancjs logo");
  });
});
