import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import {
  StyledListByImage,
  StyledList,
} from "../pages/MovieList.styled";

const Movie = (props) => {
  const navigate= useNavigate();

    const handleClick=()=>{
      navigate(`/${props.genre}/${props.item.id}`)
    }
    const ReadMore = (text) => {
      const over= JSON.stringify(text);
        const overview= over.replace(/[^\w\s]/g,"").replace(/(^\s+|\s+$)/g,"").replace(/\s+/g," ").replace("children","");
      const [isReadMore, setIsReadMore] = useState(true);
      const toggleReadMore = () => {setIsReadMore(!isReadMore)};
    
      return (
        <p>
          {isReadMore ? overview.slice(0, 150): overview }
          {overview.length > 150 &&
            <span onClick={toggleReadMore} className="text-gray-500 cursor-pointer">
              {isReadMore ? '...read more' : ' ...show less'}
            </span>
          }
        </p>
      )
    }
  return (
    <StyledList className="w-[180px] sm:w-[250px] md:w-[320px] lg:w-[320px] xl:w-[280px]  inline-block cursor-pointer relative p-4 z-0">
      <div className="w-[180px] sm:w-[250px] md:w-[320px] lg:w-[320px] xl:w-[280px]  inline-block cursor-pointer relative p-4 z-0 ">
      <div className="card">
      <img
        className="w-full h-auto  rounded"
        src={`https://image.tmdb.org/t/p/w500${props.item?.poster_path}`}
        alt=""
        onClick={handleClick}
      /> 
      <div className="descriptions absolute w-full top-[20%] p-4 md:p-16">
      <h1 className="text-1xl md:text-1xl font-bold overflow-clip">{props.item?.title} </h1>
          <div className="my-4">
            <button onClick={handleClick} className=" border bg-gray-300 text-black border-gray-300 py-2 px-5" >
              Play
            </button>
            <button className="border text-[#FFFDE3] border-gray-300 py-2 px-5 ml-4 ">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm ">
            Released: {props.item?.release_date}{" "}
          </p>
          <p className="w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] text-gray-200 text-sm md:text-base mt-2">
            
              {props.item?.overview}
          </p>

          <h1>Equalizer 2</h1>
          <p>
            If you have a problem and there is nowhere else to turn, the mysterious and elusive Robert McCall will deliver the vigilante justice you seek. This time, however, McCall's past cuts especially close to home when thugs kill Susan Plummer -- his best friend and former colleague. Now out for revenge, McCall must take on a crew of highly trained assassins who'll stop at nothing to destroy him. </p>
          <button>
            <i class="fab fa-youtube"></i>
            Play trailer on YouTube
          </button>
          
      <div onClick={handleClick} className="absolute top-0 left-0 w-full h-full   text-white px-5">
        
        <div className="flex flex-row justify-center items-center absolute top-8 right-8 text-gray-300">
          <AiFillStar/>
          <p className="text-xs md:text-base font-bold">{props.item?.vote_average} </p>
        </div>
      </div> </div>  </div>
    </div></StyledList>
  );
};

export default Movie;
