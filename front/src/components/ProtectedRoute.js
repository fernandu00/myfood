import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { isLogged } = useSelector((store) => store.user);
  if (isLogged) {
    return children;
  }
  toast.info("faça login para continuar");
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
