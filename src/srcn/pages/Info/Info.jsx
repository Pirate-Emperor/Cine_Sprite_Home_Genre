import React from "react";

import {
  StyledInfo,
  StyledInfoSection,
  StyledInfoHeader,
  StyledInfoMain,
  StyledInfoImage,
} from "../../components/styles/Info.styled";

import logo from "../../assets/main_logo.png";

const Info = () => {
  return (
    <StyledInfo>
      <StyledInfoSection>
        <StyledInfoHeader>
          <h2>Information</h2>
        </StyledInfoHeader>
        <StyledInfoMain>
          <p>
            Cinema Movie is a site that allows users to easily search for and
            recommend movies. You can search directly by movie title, or it
            recommends 20 famous movies by genre through the pre-prepared
            feature.
          </p>
          <p>
            Before you watch a movie, look for a movie in Cinema Movie first. We
            provide users with a movie's rating, release date, poster and
            overview. We update from old movies to newest movies and provide
            listings of all types.
          </p>
        </StyledInfoMain>
      </StyledInfoSection>

      <StyledInfoSection>
        <StyledInfoHeader>
          <h2>Simple tips for ease of use</h2>
        </StyledInfoHeader>
        <StyledInfoMain>
          <p>
            If you can't remember the exact title name, try entering the letters
            one by one, and you'll be able to find the relevant title under the
            search bar.
          </p>
          <p>
            However, search results are sensitive. Please check for typos in the
            name of the movie you are searching for.
          </p>
          <p>
            You can also search by the original (language) title of the movie.{" "}
          </p>
          <p>
            For more movie results, click the SEE MORE button at the bottom to
            bring up the following movies.
          </p>
          <p>
            Searched movies are entered into the history section. Tapping on the
            history will allow you to quickly search again for that movie.
          </p>
          <p>History is automatically deleted when you leave the website.</p>
        </StyledInfoMain>
      </StyledInfoSection>

      <StyledInfoSection>
        <StyledInfoHeader>
          <h2>Application Programming Interface</h2>
        </StyledInfoHeader>
        <StyledInfoMain>
          <StyledInfoImage>
            <img src={logo} alt="CM_logo" />
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              className="logo"
              alt="DB-logo"
            />
          </StyledInfoImage>
          <p>
            We use all information related to movies by importing from The Movie
            Database (TMDB). Popular movies, votes and revenue are all
            information provided by TMDB's standards. Movie posts, release date
            and overview were also taken from TMDB. Other than importing
            information, we have not added our personal thoughts or additional
            content about the movie information. We would like to inform that we
            received the license key from TMDB and used it for Current Movie.
          </p>
        </StyledInfoMain>
      </StyledInfoSection>
    </StyledInfo>
  );
};

export default Info;
