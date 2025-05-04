const reviewForm = document.getElementById('review-form');
const ratingSelect = document.getElementById('rating');
const commentTextarea = document.getElementById('comment');
const reviewsContainer = document.getElementById('reviews');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const review = {
    rating: ratingSelect.value,
    comment: commentTextarea.value
  };

  addReview(review);

  ratingSelect.value = '1';
  commentTextarea.value = '';
});

function addReview(review) {
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');

  const ratingElement = document.createElement('div');
  ratingElement.classList.add('review-rating');
  ratingElement.textContent = `Rating: ${review.rating}`;
  reviewElement.appendChild(ratingElement);

  const commentElement = document.createElement('div');
  commentElement.textContent = review.comment;
  reviewElement.appendChild(commentElement);

  reviewsContainer.appendChild(reviewElement);
}