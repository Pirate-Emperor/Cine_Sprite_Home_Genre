
import React, { useState } from "react";
import { StyledPage } from "../../components/styles/Page.styled";
import Aside from "./Aside";
import Main from "./Main";

const Home = ({genreID, setGenreID}) => {
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
      />
    </StyledPage>
  );
};

export default Home;
