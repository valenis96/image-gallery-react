import { fireEvent, render, screen } from "@testing-library/react";
import Gallery from "./Gallery";
import { imgs } from "../../assets/data";
import { beforeEach, describe, expect, test, vi } from "vitest";

describe("Gallery component", () => {
  beforeEach(() => {
    render(<Gallery />);
  });

  test("render images", () => {
    const images = screen.getAllByTestId("image");
    expect(images.length).toBe(imgs.length);
  });

  test('delete an image when you click the x', () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    const firstDeleteButton = screen.getAllByTestId('image')[0].querySelector('button');
    if (firstDeleteButton) fireEvent.click(firstDeleteButton);
    const updatedImages = screen.getAllByTestId('image');

    expect(updatedImages.length).toBe(imgs.length - 1);
  });
});
