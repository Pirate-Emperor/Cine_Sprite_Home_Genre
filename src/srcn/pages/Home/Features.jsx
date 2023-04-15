

import React from "react";
import {
  StyledSectionHeader,
  StyledFeature,
} from "../../components/styles/Page.styled";
import { sortBy } from "../../data/data";

const Features = ({ sortByURL, setSortByURL, viewBy, setViewBy }) => {
  return (
    <StyledSectionHeader>
      <StyledFeature>
        <h3>Sort By</h3>
        {Object.getOwnPropertyNames(sortBy).map((item) => {
          return (
            <div
              key={item}
              className={sortByURL === item ? "isActived" : ""}
              onClick={() => setSortByURL(item)}
            >
              <p>
                {item.charAt(0).toUpperCase() + item.substring(1, item.length)}
              </p>
            </div>
          );
        })}
      </StyledFeature>
      <StyledFeature>
        <h3>View By</h3>
        <div
          onClick={() => setViewBy(true)}
          className={viewBy ? "isActived" : ""}
        >
          <p>Images</p>
        </div>
        <div
          onClick={() => setViewBy(false)}
          className={!viewBy ? "isActived" : ""}
        >
          <p>Lists</p>
        </div>
      </StyledFeature>
      <span />
    </StyledSectionHeader>
  );
};

export default Features;
