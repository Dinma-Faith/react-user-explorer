import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/usefetch";
import { fetchUserById } from "../services/api";
import Button from "../components/button";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, loading, error } = useFetch(() => fetchUserById(id));

  if (loading) return <p className="p-4">Loading user details...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-green-700">User Details</h1>

      <div className="border rounded-lg p-4 shadow bg-green-50">
        <p>
          <span className="font-semibold">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-semibold">Username:</span> {user.username}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
        <p>
          <span className="font-semibold">Website:</span>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {user.website}
          </a>
        </p>
        <p>
          <span className="font-semibold">Company:</span> {user.company?.name}
        </p>
        <p>
          <span className="font-semibold">Address:</span>{" "}
          {user.address?.city}, {user.address?.street}
        </p>
      </div>

      <Button onClick={() => navigate("/main")} className="mt-4">
        ← Back to Users
      </Button>
    </div>
  );
}
