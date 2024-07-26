import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ element: Element }) {
  const { user } = useSelector((state) => state.user);

  return user ? <Element /> : <Navigate to="/login" />;
}
