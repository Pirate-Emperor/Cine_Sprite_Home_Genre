

import React, { useState, useEffect } from "react";
import logo from "../../assets/main_logo.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  StyledAside,
  StyledAsideLogo,
  StyledAsideHistory,
  StyledAsideHistoryText,
} from "../../components/styles/Aside.styled";
import Input from "../../components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Aside = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [historyArray, setHistoryArray] = useState([]);

  useEffect(() => {
    if (id !== undefined) {
      setHistoryArray((oldArray) => {
        // Removes the history if the id already exist in the array
        oldArray.map((item, idx) => {
          if (oldArray[idx] === id) {
            // splice
            historyRemoveByIndex(idx + 1);
          }
        });

        // Store the searched movie title along with the existing array.
        if (oldArray.length >= 5) {
          // pop
          historyRemoveByIndex(oldArray.length);
        }

        // push
        return [id, ...oldArray];
      });
    }
  }, [id]);

  // Removes the selected index history from the array.
  const historyRemoveByIndex = (index) => {
    setHistoryArray((oldArray) => {
      return oldArray.filter((item, idx) => idx !== index);
    });
  };

  return (
    <StyledAside>
      <StyledAsideLogo>
        <img src={logo} alt="CM_logo" />
      </StyledAsideLogo>
      <h1 className="searchpage">SEARCH</h1>
      <Input searchpage={true} />
      <span></span>
      {historyArray.length !== 0 && <h3 className="history">History</h3>}
      <StyledAsideHistory>
        {historyArray.map((item, idx) => {
          return (
            <StyledAsideHistoryText key={idx + item}>
              {/* If clicking on the history, send the movie title value in params. */}
              <p onClick={() => navigate(item)}>{item}</p>
              <div onClick={() => historyRemoveByIndex(idx)}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </div>
            </StyledAsideHistoryText>
          );
        })}
      </StyledAsideHistory>
    </StyledAside>
  );
};

export default Aside;
