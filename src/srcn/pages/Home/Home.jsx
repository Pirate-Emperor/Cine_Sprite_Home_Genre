
import React, { useState } from "react";
import { StyledPage } from "../../components/styles/Page.styled";
import { loadMyScript } from "../../components/styles/waterhover.js";
import Aside from "./Aside";
import Main from "./Main";

const Home = ({ genreID, setGenreID, homeMode, setHomeMode}) => {
  // Save the value in setGenreID to fetch/filter the type of movie.

  return (
    <StyledPage>
      <Aside
        genreID={genreID}
        setGenreID={(int) => {
          setGenreID(int);
        }}
      />
      <Main genreID={genreID} 
      setGenreID={(int) => {
        setGenreID(int);
      }}
      homeMode={homeMode} 
      setHomeMode={(obj) => setHomeMode(obj)}
      />
    </StyledPage>
  );
};

export default Home;
