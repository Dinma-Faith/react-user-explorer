import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!phone) {
      setError("Phone number '+234812345678' is required.");
      return;
    }

    if (phone === "+234812345678") {
      localStorage.setItem("auth", "true");
      localStorage.setItem("userPhone", phone);

      setSuccess("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/main");
      }, 1000);
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
        <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
          UserExplorer
        </h2>

        <Input
          autoFocus
          label="Phone number"
          type="tel"
          placeholder="Enter this number +234812345678"
          value={phone}
          onChange={(e) => setPhone(e.target.value.trim())}
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-600 text-sm mt-2">{success}</p>}

        <div className="mt-4">
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
