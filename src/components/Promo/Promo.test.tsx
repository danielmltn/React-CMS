import React from "react";
import { Promo } from "./index";
import { render } from "@testing-library/react";

describe("Promo", () => {
  test("should render a title, description, and image provided into props", () => {
    const title = "Title here";
    const description = "Hello Promo";
    const image = { alt: "alt info", src: "/blog_image_1.jpg" };
    const { getByText } = render(
      <Promo title={title} description={description} image={image} />
    );
    const container = getByText(description).parentElement.parentElement;
    expect(container).toMatchInlineSnapshot(`
      <div
        class="promo"
      >
        <img
          alt="alt info"
          class="promo--image"
          src="/blog_image_1.jpg"
        />
        <div
          class="promo--text"
        >
          <div
            class="promo--title"
          >
            Title here
          </div>
          <div
            class="promo--description"
          >
            Hello Promo
          </div>
        </div>
      </div>
    `);
  });

  // test('should make a promo into a clickable promo', () => {
  //   const ClickablePromo = (component) => <ClickablePromo {...component} />
  //   const promoRendered = <Promo title={'test'} description={'descr'} image={{alt: 'test alt', src: largeImage}} />
  //   const { getByText } = render(ClickablePromo(promoRendered));
  //   const container = getByText(description).parentElement.parentElement.parentElement;
  //   expect(container)
    
  // })
});
