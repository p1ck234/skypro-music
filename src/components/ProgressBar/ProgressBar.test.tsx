import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgressBar from "./ProgressBar";

it("Должен отрендерить картинку с логотипом", () => {
  const onChange = jest.fn();

  render(
    <ProgressBar // Минимальное значение ползунка
      max={undefined} // Максимальное значение, зависит от длительности аудио
      value={35} // Текущее значение ползунка
      step={0.5} // Шаг изменения значения
      onChange={onChange} // Обработчик события изменения
    />
  );
  const input = screen.getByTestId("progress-bar");
  // Проверяем, что как минимум одно изображение присутствует
  expect(input).toHaveAttribute("max", "0");

  // Если нужно проверить конкретное изображение, можно сделать это так:
  // expect(images[0]).toHaveAttribute('src', '/_next/image?url=%2Fimg%2Fplaylist01.png&w=640&q=75');
});
