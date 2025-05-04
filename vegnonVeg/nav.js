// Add event listener to search input
document.querySelector('.search-container input[type="search"]').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    // Handle search functionality here
    console.log('Search query:', this.value);
  }
});
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', () => {
  searchBar.style.display = 'block';
});

searchBar.addEventListener('blur', () => {
  searchBar.style.display = 'none';
});