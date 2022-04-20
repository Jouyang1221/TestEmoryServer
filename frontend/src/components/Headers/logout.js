import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";

export const LogoutButton = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const logout = () => {
    localStorage.clear();
    setLoggedOut(true);
  };

  if (loggedOut) {
    return <Navigate to="/login" push={true} />;
  }

  return <Button onClick={logout}>LogOut</Button>;
};
