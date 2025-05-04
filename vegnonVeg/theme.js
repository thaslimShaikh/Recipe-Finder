    const themeBtn = document.getElementById("theme-btn");
    themeBtn.onclick = () => {
      themeBtn.classList.toggle("fa-sun");
      if (themeBtn.classList.contains("fa-sun")) {
        document.body.classList.add("changeTheme");
      } else {
        document.body.classList.remove("changeTheme");
      }
    }

    const searchIcon = document.getElementById("search-icon");
    const searchBar = document.getElementById("search-bar");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    searchIcon.onclick = () => {
      if (searchBar.classList.contains("active")) {
        searchBar.classList.remove("active");
      } else {
        searchBar.classList.add("active");
        searchInput.focus();
      }
    }

    searchBtn.onclick = () => {
      const searchQuery = searchInput.value.trim();
      if (searchQuery) {
        const encodedQuery = encodeURIComponent(searchQuery);
        window.location.href = `https://www.allrecipes.com/search?q=${encodedQuery}`;
      }
    }

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchBtn.click();
      }
    });