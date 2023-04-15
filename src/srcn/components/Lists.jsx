

import React, { useState, useEffect } from "react";
import {
  StyledSectionSearch,
  StyledPreventAutoFit,
  StyledSearchDescription,
  StyledSearchDescriptionText,
  StyledContinueBox,
  StyledContinueBtn,
  StyledQuryValue,
  StyledRecommended,
} from "./styles/Page.styled";

import {
  StyledListMain
} from "./styles/MovieList.styled";

import APIUtils from "../api/APIUtils";
import MovieList from "./MovieList";
import RecommendedMovie from "./RecommendedMovie";
import Tip from "./Tip";
import Loading from "./Loading";

const Lists = ({
  pageParent,
  parameter,
  query,
  path,
  viewBy,
  setSelectedMovieID,
}) => {
  // fetch and get the result value.
  const { datas, isLoading, requestMovie } = APIUtils();

  // All data result values are stored in this element.
  const [obj, setObj] = useState({});

  // When a query to be fetched is obtained, initial values of objects are created in advance to prevent various errors.
  useEffect(() => {
    if (query !== undefined) {
      if (!obj.hasOwnProperty(query)) {
        setObj({
          ...obj,
          [query]: {
            data: [],
            page: 1,
            total: 0,
            continue: true,
          },
        });
      }
    }
  }, [query]);

  // If the fetch is successful, the data value is saved into the object.
  useEffect(() => {
    if (datas !== undefined && query !== undefined) {
      setObj({
        ...obj,
        [query]: {
          ...obj[query],
          data: [...obj[query].data, datas.results],
          total: datas.total_results,
          continue: datas.total_pages > obj[query].page ? true : false,
        },
      });
    }
  }, [datas]);

  const nextPageClickHandler = () => {
    setObj({
      ...obj,
      [query]: {
        ...obj[query],
        page: obj[query].page + 1,
      },
    });
  };

  // Fetching the data when obj has been updated.
  useEffect(() => {
    if (obj.hasOwnProperty(query)) {
      // Preventing the fetch if the data already has in the object.
      if (obj[query].page !== obj[query].data.length) {
        fetchItem();
      }
    }
  }, [obj]);

  function fetchItem() {
    requestMovie(`${parameter}&page=${obj[query].page}&`, path);
  }

  return (
    <StyledSectionSearch>
      {obj.hasOwnProperty(query) &&
        (obj[query].data[0] === undefined ? (
          <Loading />
        ) : obj[query].data[0].length !== 0 ? (
          <>
            {/*
              Change the header depending on where the component's parent came from.
            */}
            {pageParent === "HOME" ? (
              <StyledRecommended>
                {obj[query].data.length !== 0 && (
                  <>
                    <RecommendedMovie
                      datas={obj[query].data}
                      setSelectedMovieID={(id) => setSelectedMovieID(id)}
                    />
                  </>
                )}
                <span />
              </StyledRecommended>
            ) : pageParent === "SEARCH" ? (
              <StyledQuryValue>
                <p>Your have searched</p>
                <h3>{query}</h3>
                <p>Found {obj[query].total} movies</p>
              </StyledQuryValue>
            ) : (
              ""
            )}

            {/* 
              All fetched data values are delivered.
            */}
            {/* <StyledListMain>
              <div> */}
                {obj[query].data.map((pageArr, page) => {
              return pageArr.map((item, idx) => {
                return (
                  <MovieList
                    key={idx + item.title}
                    datas={item}
                    idx={idx + 1 + page * 20}
                    viewBy={viewBy}
                    setSelectedMovieID={(query) => setSelectedMovieID(query)}
                  />
                );
              });
            })}
            {/* </div></StyledListMain> */}
            <StyledPreventAutoFit />

            {/* Another fetch cannot be called until the fetch is finished loading. */}
            {isLoading ? (
              <Loading />
            ) : (
              datas !== undefined && (
                <StyledContinueBox>
                  <StyledContinueBtn
                    className={obj[query].continue ? "visible" : ""}
                    onClick={nextPageClickHandler}
                  >
                    SEE MORE
                  </StyledContinueBtn>
                </StyledContinueBox>
              )
            )}
          </>
        ) : (
          // If the query found 0 data
          <StyledSearchDescription>
            <StyledSearchDescriptionText>
              <h2>No movie data found</h2>
              {pageParent === "SEARCH" && (
                <p>
                  You have searched: <span>{query}</span>
                </p>
              )}
            </StyledSearchDescriptionText>
            <Tip />
          </StyledSearchDescription>
        ))}
    </StyledSectionSearch>
  );
};

export default Lists;
