import React from "react";
import { Promo } from "./index";
import { render } from "@testing-library/react";

describe("Promo", () => {
  test("should render a description provided into props", () => {
    const description = "Hello Promo";
    const { getByText } = render(<Promo description={description} />);
    const container = getByText(description);
    expect(container).toMatchInlineSnapshot(`
      <div
        class="hello"
      >
        Hello Promo
      </div>
    `);
  });
});