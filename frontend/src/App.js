import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Headers/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ItemScreen from "./screens/ItemScreen";
import HeaderSignedIn from "./components/Headers/HeaderSignedIn";
import SellingScreen from "./screens/SellingScreen";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import EditProfilePage from "./components/ProfilePage/EditProfilePage";
import SearchPage from "./components/SearchPage/SearchPage";
import Messanger from "./screens/Messenger/Messanger";
import OwnProfilePage from "./components/ProfilePage/OwnProfilePage";
// function App() {
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <main>
              <Container>
                <h1>Welcome To Emory Exchange</h1>
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
            <Header />
            <ItemScreen />
          </>
        }
      ></Route>
      <Route
        path="/search/:key"
        element={
          <>
            <Header />
            <SearchPage />
          </>
        }
      ></Route>
      <Route
        path="/:username"
        element={
          <>
            <Header />
            <ProfilePage />
          </>
        }
      ></Route>
      <Route
        path="/:username/own/edit"
        element={
          <>
            <HeaderSignedIn />
            <EditProfilePage />
          </>
        }
      ></Route>
      <Route
        path="/:username/own"
        element={
          <>
            <HeaderSignedIn />
            <OwnProfilePage />
          </>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <>
            <Header />
            <LoginScreen />
          </>
        }
      ></Route>
      <Route
        path="/chat"
        element={
          <>
            <Header />
            <Messanger />
          </>
        }
      ></Route>

      <Route
        path="/Profile"
        element={
          <>
            <Header />
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
            <Header />
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
