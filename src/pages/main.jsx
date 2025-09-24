import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../services/api";
import useFetch from "../hooks/usefetch";
import Input from "../components/input";
import Button from "../components/button";

export default function Main() {
  const { data: users, loading, error } = useFetch(fetchUsers);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  if (loading) return <p className="p-4 text-center text-gray-500">Loading users...</p>;
  if (error) return <p className="p-4 text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-green-700">User Directory</h2>
        <Button onClick={handleLogout} variant="logout">
          Logout
        </Button>
      </div>

      <div className="mb-4">
        <Input
          label="Search Users"
          placeholder="Type a name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* User List */}
      <ul className="space-y-4">
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            onClick={() => navigate(`/detail/${user.id}`)}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md bg-gray-100 hover:bg-green-50 cursor-pointer transition"
          >
            <p className="font-semibold text-lg text-gray-800">{user.name}</p>
            <p className="text-sm text-gray-600">Username: {user.username}</p>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
          </li>
        ))}
      </ul>

      {filteredUsers.length === 0 && (
        <p className="mt-6 text-center text-gray-500">
          No users found. Try another search.
        </p>
      )}
    </div>
  );
}
