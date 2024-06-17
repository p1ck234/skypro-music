import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";

describe("Компонент навигации", () => {
  it("Должен отрендерить картинку с логотипом", () => {
    render(<SideBar />);
    const image = screen.getByAltText("day's playlist");

    expect(image).toBeInTheDocument();
  });
});
