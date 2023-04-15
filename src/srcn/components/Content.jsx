

import React, { useEffect } from "react";
import {
  StyledContent,
  StyledContentHeader,
  StyledContentHeaderImage,
  StyledContentLine,
  StyledContentBtn,
  StyledContentMain,
  StyledContentText,
  StyledContentPoster,
} from "./styles/Content.styled";
import { genreId , genreId_to_key} from "../data/data";
import ImageLoading from "../hooks/ImageLoading";
import PosterNull from "./PosterNull";

const Content = ({ data, setSelectedMovieID, genreID, setGenreID }) => {
  const closeClickHandler = () => {
    // Disable scrolling prevention.
    document.body.style.overflow = "auto";

    // If the selectedMovieID element is null, Main.jsx closes the Content.jsx.
    setSelectedMovieID(null);
  };
  const { ImageLoad, isImageLoading } = ImageLoading();
  useEffect(() => {
    if (data.poster_path !== null) {
      ImageLoad(`https://image.tmdb.org/t/p/w500/${data.poster_path}`);
    }
  }, [data]);

  return (
    <StyledContent>
      <StyledContentHeader>
        <StyledContentHeaderImage>
          {data.backdrop_path !== null ? (
            <img
              className={isImageLoading ? "loading" : "loading--completed"}
              src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
              alt={data.title}
            />
          ) : (
            <PosterNull title={data.title} />
          )}
          <StyledContentBtn onClick={closeClickHandler}>CLOSE</StyledContentBtn>
        </StyledContentHeaderImage>
        <h2>{data.title}</h2>
        <StyledContentLine></StyledContentLine>
      </StyledContentHeader>
      <StyledContentMain>
        <StyledContentText>
          <p>
            <span>Overview </span> {data.overview}
          </p>
          <p>
            <span>Original Title </span>
            {data.original_title}
          </p>
          <p>
            <span>Language </span> {data.original_language.toUpperCase()}
          </p>
          <p className="genre" onClick={closeClickHandler}>
            <span>Genre </span>
            {data.genre_ids.length !== 0
              ? data.genre_ids.map((item, idx) => {
                  if (idx === 0) {
                    return (<button onClick={() => {
                      setGenreID(genreId_to_key(item));
                    }} > {genreId(item)}</button>);
                  } else {
                    return (<button onClick={() => {
                      setGenreID(genreId_to_key(item));
                    }} > , {genreId(item)}</button>);
                  }
                })
              : "Couldn't find the genre"}
          </p>

          <p>
            <span>Popularity Score </span> {Math.round(data.popularity)}
          </p>

          <p>
            <span>Release Date </span> {data.release_date}
          </p>

          <p>
            <span>Vote Average </span> {data.vote_average}
          </p>
          <p>
            <span>Vote Count </span> {data.vote_count}
          </p>
          <p>
            <span>Link </span>
            <a
              href={`https://www.google.com/search?q=${
                data.title
              } ${data.release_date.substring(0, 4)} Movie`}
              target="_blank"
            >
              Click Here
            </a>
          </p>
        </StyledContentText>
        <StyledContentPoster>
          <h3>Main Poster</h3>
          {data.poster_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt={data.title}
            />
          ) : (
            <p>Sorry, we couldn't find this movie's poster</p>
          )}
        </StyledContentPoster>
      </StyledContentMain>
    </StyledContent>
  );
};

export default Content;
