document.addEventListener('DOMContentLoaded', function() {
  const reviewForm = document.getElementById('reviewForm');
  const reviewsContainer = document.getElementById('reviews');
  const averageRatingValue = document.getElementById('averageRatingValue');
  const ratingInputs = document.querySelectorAll('input[name="rating"]');
  const ratingInputHidden = document.getElementById('ratingInput');

  ratingInputs.forEach(radio => {
    radio.addEventListener('change', function() {
      ratingInputHidden.value = this.value;
    });
  });

  reviewForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const review = document.getElementById('reviewInput').value;

    if (!name || !rating || !review) {
      alert('Please fill in all fields.');
      return;
    }

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    reviewItem.innerHTML = `
      <h3>${name}</h3>
      <div>Rating: ${rating.value}/5</div>
      <p>${review}</p>
    `;

    reviewsContainer.appendChild(reviewItem);

    // Calculate and display average rating
    let totalRating = 0;
    ratingInputs.forEach(input => {
      if (input.checked) {
        totalRating += parseInt(input.value);
      }
    });

    const averageRating = totalRating / ratingInputs.length;
    averageRatingValue.textContent = averageRating.toFixed(1);

    // Clear form inputs
    reviewForm.reset();
  });
});
