import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../pages/login";

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Login Page", () => {
  test("renders login form", () => {
    renderWithRouter(<Login />);
    expect(screen.getByText(/UserExplorer/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter this number/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("shows error when submitting empty input", () => {
    renderWithRouter(<Login />);
    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);
    expect(
      screen.getByText(/Phone number '\+234812345678' is required./i)
    ).toBeInTheDocument();
  });

  test("shows error when phone number is invalid", () => {
    renderWithRouter(<Login />);
    const input = screen.getByPlaceholderText(/Enter this number/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(input, { target: { value: "+1234567890" } });
    fireEvent.click(loginButton);

    expect(
      screen.getByText(/Invalid phone number. Use \+234812345678 to login./i)
    ).toBeInTheDocument();
  });

  test("logs in successfully with valid phone number", () => {
    renderWithRouter(<Login />);
    const input = screen.getByPlaceholderText(/Enter this number/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(input, { target: { value: "+234812345678" } });
    fireEvent.click(loginButton);

    // Check that localStorage was set
    expect(localStorage.getItem("auth")).toBe("true");
    expect(localStorage.getItem("userPhone")).toBe("+234812345678");
  });
});
