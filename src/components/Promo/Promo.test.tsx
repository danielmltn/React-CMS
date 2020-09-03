import React from "react";
import { render } from "@testing-library/react";

import { Promo, ClickablePromo, PromoContent } from "./index";


describe("Promo", () => {
  test("should render a title, description, and image provided into props", () => {
    const title = "Title here";
    const description = "Hello Promo";
    const image = { alt: "alt info", src: "/blog_image_1.jpg" };
    const { getByText } = render(
      <Promo title={title} description={description} image={image} />
    );
    const container = getByText(description)?.parentElement?.parentElement;
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
});

describe('ClickablePromo', () => {
  test("should make a promo into a clickable promo", () => {
    const promoToClick = (component: any) => ClickablePromo({ href: "https://www.google.com" }, component);
    const promo = promoToClick(
      <PromoContent
        title={"test"}
        description={"descr"}
        image={{ alt: "test alt", src: "/blog_image_1.jpg" }}
      />
    );
    const { getByText } = render(promo);
    const container = getByText("descr")?.parentElement?.parentElement
      ?.parentElement;
    expect(container).toMatchInlineSnapshot(`
      <div
        class="promo"
      >
        <a
          href="https://www.google.com"
        >
          <img
            alt="test alt"
            class="promo--image"
            src="/blog_image_1.jpg"
          />
          <div
            class="promo--text"
          >
            <div
              class="promo--title"
            >
              test
            </div>
            <div
              class="promo--description"
            >
              descr
            </div>
          </div>
        </a>
      </div>
    `);
  });
})
