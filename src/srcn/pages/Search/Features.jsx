

import React from "react";
import {
  StyledSectionHeader,
  StyledFeature,
} from "../../components/styles/Page.styled";

const Features = ({ viewBy, setViewBy }) => {
  return (
    <StyledSectionHeader>
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
