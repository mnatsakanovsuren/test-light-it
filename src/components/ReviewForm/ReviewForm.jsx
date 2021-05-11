import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ReviewForm = ({id, setUpdate}) => {
  const [review, setReview] = useState('');
  const [rate, setRate] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setReview(event.target.value)
  }

  const handleChangeRate = (event) => {
    setRate(event.target.value)
  }

  const submitReview = async (event) => {
    event.preventDefault();
    let result = {product: id, rate: +rate, text: review, username: 'test'};
    try {
      await fetch(`https://smktesting.herokuapp.com/api/reviews/${id}`, {
        method: 'POST',
        body: JSON.stringify(result),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + localStorage.getItem('token'),
        }
      }).then(() => {
        setRate(0);
        setReview('');
        window.location.reload();
      })
    } catch(err) {
      setError(true)
    }
  }

  return (
    <div>
      <form className="review-form" onSubmit={submitReview}>
        <h5 className="review-form__title">Rate product</h5>
        <div className="review-form__rate" onChange={handleChangeRate}>
          <label htmlFor="rate1">
            <input type="radio" id="rate1" name="rate" value={1}/>
            1
          </label>
          <label htmlFor="rate2">
            <input type="radio" id="rate2" name="rate" value={2}/>
            2
          </label>
          <label htmlFor="rate3">
            <input type="radio" id="rate3" name="rate" value={3}/>
            3
          </label>
          <label htmlFor="rate4">
            <input type="radio" id="rate4" name="rate" value={4}/>
            4
          </label>
          <label htmlFor="rate5">
            <input type="radio" id="rate5" name="rate" value={5}/>
            5
          </label>
        </div>
        <label htmlFor="review-field" className="review-form__label">
          <textarea
            name="review-field"
            id="review-field"
            rows="4"
            value={review}
            className="review-form__textarea"
            onChange={handleChange}
            placeholder="Enter Your Review"
          />
        </label>
        {localStorage.getItem('token')
          ? <button type="submit" className="form__button" disabled={rate === 0 || review === ''}>Send Review</button>
          : <p>You need <Link to="/login" className="review-form__login-link">login</Link> for add review</p>
        }
        {error && <p className="review-form__error">Something went wrong...</p>}
      </form>
    </div>
  );
};

export default ReviewForm;