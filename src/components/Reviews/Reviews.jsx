import React, {useEffect, useState} from 'react';
import star from '../../assets/star.png'

const Reviews = ({ id, classProp}) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://smktesting.herokuapp.com/api/reviews/${id}`)
      .then(res => res.json())
      .then(res => setReviews(res.reverse()))
  }, [id]);


  return (
    <div className={classProp}>
      <h4 className={`${classProp}__title`}>Reviews</h4>
      {reviews && reviews.map((review) => {
        return (
          <div key={review.id} className="review">
            <div className="review__header">
              <p className="review__author">{review.created_by.username}</p>
              <p className="review__date">{review.created_at}</p>
            </div>
            <div className="review__content">
              <div className="review__rate">{[...Array(+review.rate)].map(item => <img src={star} alt="star" />)}</div>
              <p className="review__text">{review.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Reviews;