import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

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
                <div className="absolute top-[200px] flex justify-evenly w-full">
                  <div className="h-[300px] overflow-hidden border border-solid border-yellow-400 rounded-xl">
                    <img className="w-full h-full" src={movie.poster} alt="poster" />
                  </div>
                  <div className="text-white flex items-center">
                    <h4>{movie.title}</h4>
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
