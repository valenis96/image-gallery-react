import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Image from "./Image";
import { imgs } from "@/assets/data";


describe("App component", () => {
  test("Image is render in the app", () => {
    render(<Image index={0} id={imgs[0].id} url={imgs[0].url} alt={imgs[0].alt} />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  test("First image have to be bigger", () => {
    render(<Image index={0} id={imgs[0].id} url={imgs[0].url} alt={imgs[0].alt} />);

    const image = screen.getByRole("img");
    expect(image.classList.toString()).toBe("col-span-3 row-span-3 w-[320px] h-[320px] object-cover object-center");
  });

  test("If is not the first image, the style is different", () => {
    render(<Image index={1} id={imgs[1].id} url={imgs[1].url} alt={imgs[1].alt} />);

    const image = screen.getByRole("img");
    expect(image.classList.toString()).toBe("w-[100px] h-[100px] object-cover object-center");
  });

  test("la stringa è un URL valido", () => {
    const myUrl = imgs[0].url;
    expect(() => new URL(myUrl)).not.toThrow();
  });
});