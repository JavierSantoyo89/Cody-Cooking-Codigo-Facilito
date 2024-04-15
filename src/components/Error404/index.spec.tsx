import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import Error404 from "./index";
import { Button } from "./index";
import ArrowIcon from "../common/icons/ArrowIcon";

describe("Error404", () => {
  test("renders 404 page with correct content", () => {
    render(
      <Router>
        <Error404 />
      </Router>
    );

    // Verificar que el título "404" esté presente
    expect(screen.getByText(/404/i)).toBeInTheDocument();

    // Verificar que el texto "¡Ooops!" esté presente
    expect(screen.getByText(/¡Ooops!/i)).toBeInTheDocument();

    // Verificar que el enlace al Home esté presente
    expect(screen.getByText(/Volver al Home/i)).toBeInTheDocument();

    // Verifica que el botón sea un enlace
    const linkElement = screen.getByText("Volver al Home").closest("a");
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
describe("Button", () => {
  test("verify that the click on the button", () => {
    // use <MemoryRouter> when you want to manually control the history
    const { getByText } = render(
      <MemoryRouter>
        <Error404 />
      </MemoryRouter>
    );

    const button = getByText(/Volver al Home/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
describe("Button", () => {
  test("should contain an svg", () => {
    const { getByTestId } = render(
      <Button>
        <ArrowIcon />
      </Button>
    );

    const svgElement = getByTestId("arrow-icon");
    expect(svgElement).toBeInTheDocument();
  });
});
