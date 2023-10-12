import React, { useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';

import ReviewForm from '../reviewForm/ReviewForm';
import makeRequest from '../../api/fetchConfig';

interface ReviewsProps {
  getMovieData: (movieId: string) => void;
  movie: any; 
  reviews: any[]; 
  setReviews: (reviews: any[]) => void; 
}

const Reviews: React.FC<ReviewsProps> = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef<HTMLTextAreaElement | null>(null);
  let params = useParams<{ movieId: string }>();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId!);
  }, []);

  const addReview = async (e: React.FormEvent) => {
    e.preventDefault();

   
    if (revText.current) {
      const rev = revText.current;
      console.log(reviews)
      try {
        const response = await makeRequest('/api/v1/reviews', 'post', {
          body: rev.value,
          imdbId: movieId,
        });

        const updatedReviews = [...reviews, { body: rev.value }];

        rev.value = '';

        setReviews(updatedReviews);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <div className="container mx-auto p-4">
      <div className="text-3xl font-bold mb-4">Reviews</div>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
        {movie && (
          <div className="w-full lg:w-1/2 mr-0 lg:mr-8">
            <img src={movie.poster} alt="" className="w-full" />
          </div>
        )}
        <div className="w-full">
          {movie && (
            <div className="mb-4">
              <ReviewForm defaultValue='' handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
            </div>
          )}
          {reviews && Array.isArray(reviews) ? (
  reviews.map((r, index) => (
    <div key={index} className="mb-4 border-b p-5">

      <div>{r.body}</div>
    </div>
  ))
) : (
  <p>No reviews yet.</p>
)}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
