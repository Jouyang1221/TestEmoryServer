import { React, useContext } from "react";
import { Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Headers/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ItemScreen from "./screens/ItemScreen";
import HeaderSignedIn from "./components/Headers/HeaderSignedIn";
import SellingScreen from "./screens/SellingScreen";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import EditProfilePage from "./components/ProfilePage/EditProfilePage";
import SearchPage from "./components/SearchPage/SearchPage";
import Messanger from "./screens/Messenger/Messanger";
import OwnProfilePage from "./components/ProfilePage/OwnProfilePage";
import { AuthContext } from "./context/AuthContext";

// function App() {
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeaderSignedIn />
            <main>
              <Container>
                <h1>Welcome Emory Exchange</h1>
                <HomeScreen />
              </Container>
            </main>
            <Footer />
          </>
        }
      ></Route>
      <Route
        path="/product/:id"
        element={
          <>
            <HeaderSignedIn />
            <ItemScreen />
          </>
        }
      ></Route>
      <Route
        path="/search/:key"
        element={
          <>
            <HeaderSignedIn />
            <SearchPage />
          </>
        }
      ></Route>
      <Route
        path="/:username"
        element={
          <>
            <HeaderSignedIn />
            <ProfilePage />
          </>
        }
      ></Route>
      <Route
        path="/own/edit"
        element={
          <>
            <HeaderSignedIn />
            <EditProfilePage />
          </>
        }
      ></Route>
      <Route
        path="/own"
        element={
          <>
            <HeaderSignedIn />
            <OwnProfilePage />
          </>
        }
      ></Route>
      <Route
        path="/login"
        // element={<LoginScreen />}
        element={<>{user ? <Navigate to="/" /> : <LoginScreen />}</>}
      ></Route>
      <Route
        path="/chat"
        element={
          <>
            <HeaderSignedIn />
            <Messanger />
          </>
        }
      ></Route>

      <Route
        path="/Profile"
        element={
          <>
            <HeaderSignedIn />
            <ProfileScreen />
          </>
        }
      ></Route>
      <Route
        path="/login/forgotPassword"
        element={
          <>
            <Header />
            <ForgotPasswordScreen />
          </>
        }
      ></Route>
      <Route
        path="/sell"
        element={
          <>
            <HeaderSignedIn />
            <SellingScreen />
          </>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <>
            <Header />
            <SignUpScreen />
          </>
        }
      ></Route>
    </Routes>
  );
};

export default App;
