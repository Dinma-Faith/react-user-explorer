import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!phone) {
      setError("Phone number '+234812345678' is required.");
      return;
    }

    if (phone === "+234812345678") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userPhone", phone);
      navigate("/main");
    } else {
      setError("Invalid phone number. Use +234812345678 to login.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">UserExplorer</h2>

        <Input
          label="Phone number"
          type="tel"
          placeholder="Enter this number +234812345678"
          value={phone}
          onChange={(e) => setPhone(e.target.value.trim())}
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="mt-4">
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
