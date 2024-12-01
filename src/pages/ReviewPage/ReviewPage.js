import React, { useState } from 'react';
import './ReviewPage.css';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [sortOrder, setSortOrder] = useState('highest'); // Sorting reviews

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && rating && comment) {
      const newReview = { name, rating: parseInt(rating), comment };
      setReviews([...reviews, newReview]);
      setName(''); // Reset the form
      setRating('');
      setComment('');
    }
  };

  // Handle review deletion
  const handleDelete = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  // Sort reviews based on rating
  const sortedReviews = [...reviews].sort((a, b) =>
    sortOrder === 'highest' ? b.rating - a.rating : a.rating - b.rating
  );

  return (


    <div className="review-container">
      <h2 className="review-title">Customer Reviews</h2>

      {/* Form for submitting reviews */}
      <form className="review-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
          <option value="">Select Rating</option>
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Average</option>
          <option value="2">2 - Poor</option>
          <option value="1">1 - Terrible</option>
        </select>

        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review"
          required
        ></textarea>

        <button type="submit">Submit Review</button>
      </form>

      {/* Sort Reviews */}
      <div className="sort-section">
        <label>Sort by:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="highest">Highest Rating</option>
          <option value="lowest">Lowest Rating</option>
        </select>
      </div>

      {/* Display Reviews */}
      <div className="review-list">
        {sortedReviews.length > 0 ? (
          sortedReviews.map((review, index) => (
            <div key={index} className="review-item">
              <h3>{review.name}</h3>
              <p>Rating: {review.rating}/5</p>
              <p>{review.comment}</p>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
   
  );
};

export default ReviewPage;
