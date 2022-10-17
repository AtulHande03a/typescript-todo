import React from "react";
import { Navigate } from "react-router-dom";

const ProtectdRoute = ({ children }) => {
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};
