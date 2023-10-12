package com.semirpecar.movies.services;

import com.semirpecar.movies.entities.Movie;
import com.semirpecar.movies.repositories.MovieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepo movieRepo;

    public List<Movie> getAllMovies(){
     return movieRepo.findAll();
    }

    public Optional<Movie> findMovieById(String id){
        return movieRepo.getMovieByImdbId(id);
    }
}
