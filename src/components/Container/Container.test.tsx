import { render } from "@testing-library/react";
import { Container } from '.'
import { Header } from "../Header";

describe("Container", () => {
    it("should load the container", () => {
        const { getByTestId } = render(<Container><Header /></Container>);
        const pageContainer = getByTestId("page-container");

        expect(pageContainer).toBeDefined();
    });

    it("should allow child components", () => {
        const { getByTestId } = render(<Container><Header /></Container>);
        const childComponent = getByTestId("header-logo-image")

        expect(childComponent).toBeDefined()
    })
});
