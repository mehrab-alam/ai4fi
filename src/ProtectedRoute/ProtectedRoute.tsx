import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import authService from "../services/authService";

import ScrollToTop from "../components/common/ScrollToTop";

interface PropType {
  component: React.FC;
  props?: any;
}

const ProtectedRoute: FC<PropType> = ({ component: Component, props }) => {
  if (authService?.isAuthenticated()) {
    return (
      <>
        <ScrollToTop />
        <Component {...props} />
      </>
    );
  }
  return <Navigate to='/login' />;
};

export default ProtectedRoute;
