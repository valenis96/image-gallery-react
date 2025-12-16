import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App";

const scrollToMock = vi.fn();
Object.defineProperty(window, "scrollTo", { value: scrollToMock });

describe("App component", () => {
  beforeEach(() => {
    render(<App />);
    scrollToMock.mockClear();
  });

  test("Button is render in the app", () => {
    const button = screen.getByRole("button", { name: /ArrowUpIcon/i });
    expect(button).toBeInTheDocument();
  });

  test("on click on the button the page scroll up", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /ArrowUpIcon/i });
    await user.click(button);

    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});