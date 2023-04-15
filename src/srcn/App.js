

import React, { useState } from "react";
import "./font.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "./components/Theme";
import { GlobalStyles } from "./components/styles/Global";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Info from "./pages/Info/Info";
import ErrorPage from "./pages/Error/ErrorPage";

import Main from "./pages/Search/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { StyledContainer } from "./components/styles/Container.styled";

function App() {
  const [colorMode, setColorMode] = useState(true);

  return (
    <ThemeProvider theme={colorMode ? lightMode : darkMode}>
      <GlobalStyles />
      <Router>
        <Navbar
          colorMode={colorMode}
          setColorMode={(obj) => setColorMode(obj)}
        />
        <StyledContainer>
          <Routes>
            <Route exact path="/Cine_Sprite_Genre/" element={<Home />} />
            <Route exact path="/Cine_Sprite_Genre/search" element={<Search />}>
              <Route path=":id" element={<Main />} />
            </Route>
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/Cine_Sprite_Genre/info" element={<Info />} />
            <Route path="/Cine_Sprite_Genre/info1" element={<Info />} />
            <Route path="/Cine_Sprite_Genre/info2" element={<Info />} />
            <Route path="/Cine_Sprite_Genre/info3" element={<Info />} />
          </Routes>
        </StyledContainer>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
