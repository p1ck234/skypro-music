import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VolumeBar from "./VolumeBar";

it("Должен отрендерить картинку с логотипом", () => {
  const onChange = jest.fn();

  render(
    <VolumeBar min={0} max={10} step={0.1} value={20} onChange={onChange} />
  );
  const input = screen.getByTestId("progress-input");
  // Проверяем, что как минимум одно изображение присутствует
  expect(input).toHaveAttribute("value", "20");

  // Если нужно проверить конкретное изображение, можно сделать это так:
  // expect(images[0]).toHaveAttribute('src', '/_next/image?url=%2Fimg%2Fplaylist01.png&w=640&q=75');
});
