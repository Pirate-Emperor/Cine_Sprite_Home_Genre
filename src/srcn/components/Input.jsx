

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledInput,
  StyledInputCover,
  StyledInputList,
} from "./styles/Input.styled";
import APIUtils from "../api/APIUtils";
import useDebounce from "../hooks/useDebounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Input = ({ searchpage }) => {
  const navigate = useNavigate();
  const [hasFocus, setFocus] = useState(false);
  const { datas, isLoading, requestMovie } = APIUtils();
  const [textValue, setTextValue] = useState("");
  const searchTerm = useDebounce(textValue, 500);

  // Fetch item.
  useEffect(() => {
    searchTerm !== "" &&
      requestMovie(
        `query=${encodeURIComponent(searchTerm)}&`,
        "/search/movie?"
      );
  }, [searchTerm]);

  const listClickHandler = (title) => {
    setTextValue(title);
    submitTitle(title);
  };

  const searchClickHandler = () => {
    if (textValue !== "") {
      submitTitle(textValue);
    }
  };

  const valueChangeHandler = (e) => {
    setTextValue(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const onKeyHandler = (e) => {
    if (textValue.trim().length !== 0) {
      if (e.keyCode === 13) {
        // When fetched, removes the focusing of the input.
        e.target.blur();

        submitTitle(textValue);
      }
    }
  };

  // The searched title is sent as id.
  // The page that received the id performs a new fetch through the id.
  const submitTitle = (id) => {
    navigate(`/search/${encodeURIComponent(id)}`);
  };

  return (
    <StyledInput className={searchpage ? "searchpage" : ""}>
      <StyledInputCover>
        <input
          type="text"
          onFocus={() => setFocus(true)}
          onBlur={() => {
            setTimeout(() => {
              setFocus(false);
            }, 200);
          }}
          onChange={valueChangeHandler}
          onKeyDown={onKeyHandler}
          value={textValue}
          autoComplete="off"
        />
        <div
          className={hasFocus ? "has-focus" : ""}
          onClick={searchClickHandler}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </StyledInputCover>
      <StyledInputList className={hasFocus ? "has-focus" : ""}>
        {hasFocus &&
          searchTerm !== "" &&
          datas !== undefined &&
          datas.results.map((item, idx) => {
            return (
              <p
                key={idx + item.title}
                onClick={() => listClickHandler(item.title)}
              >
                {item.title}
              </p>
            );
          })}
      </StyledInputList>
    </StyledInput>
  );
};

export default Input;
