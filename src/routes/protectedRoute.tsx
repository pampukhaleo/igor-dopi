import { Navigate } from "react-router-dom";
import React, { ReactComponentElement } from "react";

type PropsType = {
  children: ReactComponentElement<any>;
};

export const ProtectedRoute: React.FC<PropsType> = ({ children }) => {
  const logined = false

  return logined ? children : <Navigate to="/page/:error" />;
};
