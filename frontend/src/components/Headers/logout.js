import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Header.css";
export const LogoutButton = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const logout = () => {
    localStorage.clear();
    setLoggedOut(true);
    window.location.reload(false);
    // <Navigate to="/login" push={true} />;
  };

  // if (loggedOut) {
  //   return <Navigate to="/login" push={true} />;
  // }

  return (
    <Button className="header" onClick={logout}>
      LogOut
    </Button>
  );
};
