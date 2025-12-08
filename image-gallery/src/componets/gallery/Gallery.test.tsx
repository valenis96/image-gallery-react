import { render, screen } from "@testing-library/react";
import Gallery from "./Gallery";
import { imgs } from "../../assets/data";
import { describe, expect, test, vi } from "vitest";

// mock del componente Image
vi.mock("../image/Image", () => {
  return {
    default: ({ }) => <img data-testid="image"></img>
  };
});

describe("Gallery component", () => {
  test("renderizza tanti Image quanti ne contiene imgs", () => {
    render(<Gallery />);
    const images = screen.getAllByTestId("image");
    expect(images.length).toBe(imgs.length);
  });
});
