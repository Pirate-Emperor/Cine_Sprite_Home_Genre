

import React from "react";
import {
  StyledAside,
  StyledAsideLogo,
} from "../../components/styles/Aside.styled";
import logo from "../../assets/main_logo.png";
import { request } from "../../data/data";

const Aside = ({ genreID, setGenreID }) => {
  return (
    <StyledAside>
      <StyledAsideLogo>
        <img src={logo} alt="Cine_Sprite" />
      </StyledAsideLogo>
      <h1>GENRES</h1>
      <h4>{request[genreID].genre}</h4>
      <span />
      <ul>
        {request.map((item, idx) => {
          return (
            <li
              key={item.genre}
              onClick={() => {
                setGenreID(idx);
              }}
              value={idx}
              className={idx === genreID ? "genre-actived" : ""}
            >
              <p>{item.genre}</p>
              <span />
              <span />
            </li>
          );
        })}
      </ul>
    </StyledAside>
  );
};

export default Aside;
