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
import IfOwnProfile from "./screens/ifOwnProfile";
import EditItem from "./components/ItemPage/editItem";

// function App() {
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {user ? (
              <>
                <HeaderSignedIn />
                <main>
                  <Container>
                    <h1>Welcome Emory Exchange</h1>
                    <HomeScreen />
                  </Container>
                </main>
                <Footer />)
              </>
            ) : (
              <LoginScreen />
            )}
          </>
        }
      ></Route>
      <Route
        path="/product/:id"
        element={
          <>
            {user ? (
              <>
                <HeaderSignedIn />
                <ItemScreen />
              </>
            ) : (
              <LoginScreen />
            )}
          </>
        }
      ></Route>
      <Route
        path="/product/:id/edit"
        element={
          <>
            {user ? (
              <>
                <HeaderSignedIn />
                <EditItem />
              </>
            ) : (
              <LoginScreen />
            )}
          </>
        }
      ></Route>

      <Route
        path="/search/:key"
        element={
          <>
            {user ? (
              <>
                <HeaderSignedIn />
                <SearchPage />
              </>
            ) : (
              <LoginScreen />
            )}
          </>
        }
      ></Route>
      <Route
        path="/:username"
        element={
          <>
            {user ? (
              <>
                <IfOwnProfile />
                {/* <HeaderSignedIn />
            <ProfilePage /> */}
              </>
            ) : (
              <LoginScreen />
            )}
          </>
        }
      ></Route>
      <Route
        path="/own/edit"
        element={
          <>
            {user ? (
              <>
                <HeaderSignedIn />
                <EditProfilePage />
              </>
            ) : (
              <LoginScreen />
            )}
          </>
        }
      ></Route>
      <Route
        path="/own"
        element={
          <>
            {user ? (
              <>
                <HeaderSignedIn />
                <OwnProfilePage />
              </>
            ) : (
              <LoginScreen />
            )}
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
            {user ? (
              <>
                <HeaderSignedIn />
                <SellingScreen />
              </>
            ) : (
              <LoginScreen />
            )}
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
