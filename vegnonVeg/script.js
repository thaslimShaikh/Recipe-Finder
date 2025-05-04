const starRating = document.getElementById('star-rating');
const averageRating = document.getElementById('average-rating');
const reviewList = document.getElementById('review-list');
const reviewForm = document.getElementById('review-form');
const reviewText = document.getElementById('review-text');

let userRating = 0;
let reviews = [];

// Load reviews from local storage (if available)
const storedReviews = localStorage.getItem('reviews');
if (storedReviews) {
  reviews = JSON.parse(storedReviews);
  updateReviewList();
  calculateAverageRating();
}

// Function to create star rating UI
function createStarRating() {
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.textContent = '\u2605'; // Unicode star character
    star.dataset.rating = i;
    star.addEventListener('click', handleStarClick);
    starRating.appendChild(star);
  }
}

// Function to handle star click
function handleStarClick(event) {
  userRating = parseInt(event.target.dataset.rating);
  starRating.querySelectorAll('span').forEach(star => {
    star.style.color = userRating >= parseInt(star.dataset.rating) ? 'gold' : 'gray';
  });
}

// Function to calculate average rating
function calculateAverageRating() {
  if (reviews.length === 0) {
    averageRating.textContent = 'Average Rating: -';
    return;
  }
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const average = totalRating / reviews.length;
  averageRating.textContent = `Average Rating: ${average.toFixed(1)}`;
}

// Function to update review list
function updateReviewList() {
  reviewList.innerHTML = '';
  reviews.forEach(review => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <p>${review.text}</p>
      <span>
