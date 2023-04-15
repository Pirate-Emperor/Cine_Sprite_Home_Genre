

import React from "react";
import { StyledSearchDescriptionText } from "./styles/Page.styled";

const Tip = () => {
  return (
    <>
      <StyledSearchDescriptionText>
        <h2>Searching Tips</h2>
        <p>
          You can also search by the original (language) title of the movie.
          When searching for a title, it searches the list of movies related to
          the searched name at the same time. If you can't remember the exact
          title name, try entering the letters one by one, and you'll be able to
          find the relevant title under the search bar.
        </p>
        <p>
          However, search results are sensitive. Please check for typos in the
          name of the movie you are searching for.
        </p>
      </StyledSearchDescriptionText>
      <StyledSearchDescriptionText>
        <h2>Try the features</h2>
        <p>
          For more search results, click the SEE MORE button at the bottom to
          bring up the following movies. If there are no more searched movies to
          load, the SEE MORE button will not be visible.
        </p>
        <p>
          Searched movies are entered into the history section. Tapping on the
          history will allow you to quickly search again for that movie. History
          is automatically deleted when you leave the website.
        </p>
      </StyledSearchDescriptionText>
    </>
  );
};

export default Tip;
