import './App.css';
import { useEffect, useState } from 'react';
import makeRequest from './api/fetchConfig';

function App() {
  const [movies, setMovies] = useState<any>([]);

  const getMovies = async () => {
    try {
      const response = await makeRequest('/api/v1/movies', 'get');
      setMovies(response);
      console.log(movies)
    } catch (error) {
      console.error('GET request error:', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);



  return <div className="App"></div>;
}

export default App;
