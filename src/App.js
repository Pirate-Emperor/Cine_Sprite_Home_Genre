import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Login from "./pages/Login";
import MovieList from "./pages/MovieList";
import ProtectedRoute from "./components/ProtectedRoute";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";


// srcn

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "./srcn/components/Theme";
import { GlobalStyles, GlobalHomeStyles } from "./srcn/components/styles/Global";

import Home1 from "./srcn/pages/Home/Home";
import Search from "./srcn/pages/Search/Search";
import Info from "./srcn/pages/Info/Info";
import ErrorPage from "./srcn/pages/Error/ErrorPage";

import Main from "./srcn/pages/Search/Main";
import Navbar1 from "./srcn/components/Navbar";
import Footer1 from "./srcn/components/Footer";
import { UserAuth } from "./context/AuthContext";
import { StyledContainer } from "./srcn/components/styles/Container.styled";

function App() {
  const [colorMode, setColorMode] = useState(true);
  const [homeMode, setHomeMode] = useState(true);
  const [genreID, setGenreID] = useState(0);
  
  return (
    (!homeMode)
    ?
    <ThemeProvider theme={colorMode ? lightMode : darkMode}>
      <GlobalStyles />
      <Router>
        <Navbar1
          colorMode={colorMode}
          setColorMode={(obj) => setColorMode(obj)}
          homeMode={colorMode}
          setHomeMode={(obj) => setHomeMode(obj)}
          
        />

        <StyledContainer>
          <Routes>
            <Route exact path="/genre" element={<Home1 genreID={genreID} setGenreID={(int) => {setGenreID(int);}}/>} />
            <Route exact path="/search" element={<Search />}>
              <Route path=":id" element={<Main />} />
            </Route>
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/info" element={<Info />} />
            <Route path="/info1" element={<Info />} />
            <Route path="/info2" element={<Info />} />
            <Route path="/info3" element={<Info />} />
          </Routes>
        </StyledContainer>
        <Footer1 />
      </Router>
    </ThemeProvider>
    :

      <ThemeProvider theme={colorMode ? lightMode : darkMode}>
      <Router>
      <GlobalHomeStyles/>
      <AuthContextProvider>
      
        <Navbar 
        homeMode={colorMode}
        setHomeMode={(obj) => setHomeMode(obj)}
        />
        <Routes>
          <Route path="/" element={<Home 
                                     />}></Route>
          <Route path="/signIn" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
            <Route path=":genre" element={<MovieList />}></Route>
            <Route path="/:genre/:movieId" element={<MovieDetails homeMode={homeMode}
                                    setHomeMode={(obj) => setHomeMode(obj) }
                                    genreID={genreID}
                                    setGenreID={(int) => setGenreID(int)}/>}></Route>
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
        <Footer/>
      </AuthContextProvider>
      </Router>
      </ThemeProvider>

  );
}

export default App;
