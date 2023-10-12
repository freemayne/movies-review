import { useEffect, useState } from "react";
import makeRequest from "./api/fetchConfig";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";

function App() {
  const [movies, setMovies] = useState<any>([]);
  const [movie, setMovie] = useState<any>();
  const [reviews, setReviews] = useState<any[]>([]);

  

  useEffect(() => {
    const getMovies = async () => {
    try {
      const response = await makeRequest("/api/v1/movies", "get");
      setMovies(response);
      console.log(movies);
    } catch (error) {
      console.error("GET request error:", error);
    }
  };
    getMovies();
  }, []);

  const getMovieData = async (movieId: string) => {
     
    try 
    {
        const response = await makeRequest(`/api/v1/movies/${movieId}`, "get");

        const singleMovie= response as any;

        setMovie(singleMovie);
      console.log(singleMovie)
        setReviews(singleMovie.reviewIds);
  console.log(reviews)        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-quicksand ">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
