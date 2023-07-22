//화면을 꾸려주는 곳
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

import Chatting from "./screens/Chatting";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import SingUp from "./screens/SignUp";
import Layout from "./components/Layout";
import { GlobalStyle, darkTheme, whiteTheme } from "./styles";

import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : whiteTheme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route
              path={routes.home}
              element={
                isLogin ? (
                  <Layout>
                    <Home />
                  </Layout>
                ) : (
                  <Login />
                )
              }
            />
            <Route path={routes.signup} element={<SingUp />} />
            <Route
              path={routes.profile}
              element={
                <Layout>
                  <Profile />
                </Layout>
              }
            />
            <Route path={routes.chatting} element={<Chatting />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
