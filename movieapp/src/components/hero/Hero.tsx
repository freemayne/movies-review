import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

const Hero = ({ movies }: any) => {
  console.log(movies);
  return (
    <div className="w-screen bg-black">
      <Carousel>
        {movies?.map((movie: any) => (
          <Paper key={movie.imdbId}>
            <div className=" h-[550px] bg-black">
              <div
                className="bg-no-repeat h-full w-full bg-cover"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url(${movie.backdrops[0]})`,
                }}
              >
                <div className="absolute sm:top-[200px] flex justify-evenly w-full flex-col sm:flex-row items-center top-[20px]">
                  <div className="h-[300px] overflow-hidden border border-solid border-yellow-500 rounded-xl">
                    <img
                      className="w-full h-full"
                      src={movie.poster}
                      alt="poster"
                    />
                  </div>
                  <div className="text-white flex items-center">
                    <h4>{movie.title}</h4>
                  </div>
                  <div className="flex justify-between items-center width-[300px]">
                    <Link
                      to={`/Trailer/${movie.trailerLink.substring(
                        movie.trailerLink.length - 11
                      )}`}
                    >
                      <div className="p-0 m-0 w-[150px]">
                      <FaPlayCircle className="play-button-icon p-0 m-0 text-yellow-500 text-5xl transform scale-100 transition-transform duration-300 hover:scale-125 cursor-pointer hover:text-white" />



                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
