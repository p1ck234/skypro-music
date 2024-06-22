import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";

it("Должен отрендерить картинку с логотипом", () => {
  render(<SideBar />);
  const images = screen.getAllByAltText("day's playlist");

  // Проверяем, что как минимум одно изображение присутствует
  expect(images.length).toBeGreaterThan(0);

  // Если нужно проверить конкретное изображение, можно сделать это так:
  // expect(images[0]).toHaveAttribute('src', '/_next/image?url=%2Fimg%2Fplaylist01.png&w=640&q=75');
});
