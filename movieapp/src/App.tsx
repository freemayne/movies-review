import { useEffect, useState } from "react";
import makeRequest from "./api/fetchConfig";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";

function App() {
  const [movies, setMovies] = useState<any>([]);

  

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

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-quicksand ">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
