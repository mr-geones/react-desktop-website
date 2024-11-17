import React from "react";

const StarRating = ({ starRating }) => {
  const maxStars = 5;
  const filledStars = Math.min(starRating, maxStars);
  const emptyStars = maxStars - filledStars;

  return (
    <div className='star-rating'>
      {[...Array(filledStars)].map((_, index) => (
        <i key={index} className='fa-sharp fa-solid fa-star star'></i>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={index} className='fa-sharp fa-regular fa-star'></i>
      ))}
    </div>
  );
};

export default StarRating;
