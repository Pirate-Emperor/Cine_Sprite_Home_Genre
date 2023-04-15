

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
          className={`border text-[#FFFDE3] text-base border-gray-300 py-2 px-5 flex flex-row items-center  hover:border-cyan-600 mb-8 md:mb-0 ${viewBy ? "isActived hover:bg-cyan-200" : "hover:bg-cyan-600"}`}
        >
          <p>Images</p>
        </div>
        <div
          onClick={() => setViewBy(false)}
          className={`border text-[#FFFDE3] text-base border-gray-300 py-2 px-5 flex flex-row items-center  hover:border-cyan-600 mb-8 md:mb-0 ${!viewBy ? "isActived hover:bg-cyan-200" : "hover:bg-cyan-600"}`}
        >
          <p>Lists</p>
        </div>
      </StyledFeature>
      <span />
    </StyledSectionHeader>
  );
};

export default Features;
