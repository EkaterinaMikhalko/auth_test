import React from "react";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react";
import authStore from "../store";

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = observer(({ element }) => {
  return authStore.isAuthenticated ? element : <Navigate to="/login" />;
});

export default PrivateRoute;
