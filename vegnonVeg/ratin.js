    const ratingElements = document.querySelectorAll('.rating input[type="radio"]');
    let selectedRating = 0;
    let reviews = [];
    let totalRating = 0;

    ratingElements.forEach((ratingElement) => {
      ratingElement.addEventListener('change', () => {
        selectedRating = parseInt(ratingElement.value);
        updateSelectedRating();
      });
    });

    function updateSelectedRating() {
      ratingElements.forEach((ratingElement) => {
        if (parseInt(ratingElement.value) <= selectedRating) {
          ratingElement.nextElementSibling.style.color = 'orange';
        } else {
          ratingElement.nextElementSibling.style.color = '#ddd';
        }
      });
      document.getElementById('ratingInput').value = selectedRating;
    }

    const reviewForm = document.getElementById('reviewForm');
    const nameInput = document.getElementById('nameInput');
    const reviewInput = document.getElementById('reviewInput');

    reviewForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const review = {
        name: nameInput.value,
        rating: selectedRating,
        review: reviewInput.value
      }; 
      addReview(review);
      reviewForm.reset();

ratingElements.forEach((ratingElement) => {
        ratingElement.nextElementSibling.style.color = '#ddd';
      });
    });

    function addReview(review) {
      reviews.push(review);
      totalRating += review.rating;
      const reviewHTML = `
        <div class="review">
          <h3>${review.name}</h3>
          <p>Rating: ${review.rating}/5</p>
          <p>${review.review}</p>
        </div>
      `;
      document.getElementById('reviews').innerHTML += reviewHTML;
      calculateAverageRating();
    }

    function calculateAverageRating() {
      const averageRating = totalRating / reviews.length;
      document.getElementById('averageRating').innerHTML = `Average rating: ${averageRating.toFixed(1)}/5`;
    }