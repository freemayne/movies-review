package com.semirpecar.movies.repositories;

import com.semirpecar.movies.entities.Review;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ReviewRepo extends MongoRepository<Review, ObjectId> {
}
