// Get the wishlist container and modal
const wishlistContainer = document.querySelector('.wishlist-container');
const addProductModal = document.querySelector('#add-product-modal');

// Get the add product button and form
const addProductButton = document.querySelector('.btn-add-product');
const addProductForm = document.querySelector('#add-product-modal form');

// Add event listener to the add product button
addProductButton.addEventListener('click', () => {
  addProductModal.style.display = 'block';
});

// Add event listener to the add product form
addProductForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const productName = document.querySelector('#product-name').value;
  const productDescription = document.querySelector('#product-description').value;
  const productPrice = document.querySelector('#product-price').value;
  
  // Create a new wishlist item
  const wishlistItem = document.createElement('li');
  wishlistItem.className = 'wishlist-item';
  wishlistItem.innerHTML = `
    <img src="https://via.placeholder.com/100" alt="Product Image">
    <div class="wishlist-item-info">
      <h3>${productName}</h3>
      <p>${productDescription}</p>
      <p>Price: ₹${productPrice}</p>
      <button class="btn-remove">Remove</button>
    </div>
  `;
  
  // Add the new wishlist item to the wishlist
  wishlistContainer.querySelector('.wishlist-items').appendChild(wishlistItem);
  
  // Update the total items and price
  const totalItems = wishlistContainer.querySelectorAll('.wishlist-item').length;
  const totalPrice = wishlistContainer.querySelectorAll('.wishlist-item').reduce((acc, item) => acc + parseInt(item.querySelector('.wishlist-item-info p:last-child').textContent.replace('₹', '')), 0);
  wishlistContainer.querySelector('.total-items').textContent = totalItems;
  wishlistContainer.querySelector('.total-price').textContent = `₹${totalPrice}`;
  
  // Close the modal
  addProductModal.style.display = 'none';
});

// Add event listener to the remove buttons
wishlistContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-remove')) {
    const wishlistItem = e.target.parentNode.parentNode;
    wishlistItem.remove();
    
    // Update the total items and price
    const totalItems = wishlistContainer.querySelectorAll('.wishlist-item').length;
    const totalPrice = wishlistContainer.querySelectorAll('.wishlist-item').reduce((acc, item) => acc + parseInt(item.querySelector('.wishlist-item-info p:last-child').textContent.replace('₹', '')), 0);
    wishlistContainer.querySelector('.total-items').textContent = totalItems;
    wishlistContainer.querySelector('.total-price').textContent = `₹${totalPrice}`;
  }
});