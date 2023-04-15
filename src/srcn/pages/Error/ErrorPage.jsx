

import React from "react";
import {
  StyledErrorPageDiv,
  StyledErrorPage,
  StyledErrorPageHeader,
  StyledErrorPageMain,
} from "../../components/styles/ErrorPage.styled";
const ErrorPage = () => {
  return (
    <StyledErrorPage>
      <StyledErrorPageDiv>
      <div class="seaContainer">
        <div class="submarine__container">
          <div class="light"></div>
          <div class="submarine__periscope"></div>
          <div class="submarine__periscope-glass"></div>
          <div class="submarine__sail">
            <div class="submarine__sail-shadow dark1">
            </div>
            <div class="submarine__sail-shadow light1"></div>
            <div class="submarine__sail-shadow dark2"></div>
          </div>
          <div class="submarine__body">
            <div class="submarine__window one">
      
            </div>
            <div class="submarine__window two">
      
            </div>
            <div class="submarine__shadow-dark"></div>
            <div class="submarine__shadow-light"></div>
            <div class="submarine__shadow-arcLight"></div>
          </div>
          <div class="submarine__propeller">
            <div class="propeller__perspective">
            <div class="submarine__propeller-parts darkOne"></div>
            <div class="submarine__propeller-parts lightOne"></div>
            </div>        
          </div>
        </div>
        <div class="bubbles__container">
          <span class="bubbles bubble-1"></span>
          <span class="bubbles bubble-2"></span>
          <span class="bubbles bubble-3"></span>
          <span class="bubbles bubble-4"></span>
        </div>
        <div class="ground__container">
          <div class="ground ground1">
            <span class="up-1"></span>
            <span class="up-2"></span>
            <span class="up-3"></span>
            <span class="up-4"></span>
            <span class="up-5"></span>
            <span class="up-6"></span>
            <span class="up-7"></span>
            <span class="up-8"></span>
            <span class="up-9"></span>
            <span class="up-10"></span>
          </div>
          <div class="ground ground2">
            <span class="up-1"></span>
            <span class="up-2"></span>
            <span class="up-3"></span>
            <span class="up-4"></span>
            <span class="up-5"></span>
            <span class="up-6"></span>
            <span class="up-7"></span>
            <span class="up-8"></span>
            <span class="up-9"></span>
            <span class="up-10"></span>
            <span class="up-11"></span>
            <span class="up-12"></span>
            <span class="up-13"></span>
            <span class="up-14"></span>
            <span class="up-15"></span>
            <span class="up-16"></span>
            <span class="up-17"></span>
            <span class="up-18"></span>
            <span class="up-19"></span>
            <span class="up-20"></span>
          </div>
        </div>
      </div>
      </StyledErrorPageDiv>
      <StyledErrorPageHeader>
        <h2>404</h2>
        <h3> Error</h3>
      </StyledErrorPageHeader>
      <StyledErrorPageMain>
        <h3>Page not found</h3>
        <p>Oops . . . Something is wrong</p>
        <p>The address you are looking for does not exist</p>
      </StyledErrorPageMain>
    </StyledErrorPage>
  );
};

export default ErrorPage;
