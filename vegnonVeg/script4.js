const recipes = [
    { name: 'Butter Chicken', diet: 'Non-Vegetarian', cookingTime: 55 },
    { name: 'Chicken Tikka Masala', diet: 'Non-Vegetarian', cookingTime: 45 },
    { name: 'Chicken Roll', diet: 'Non-Vegetarian', cookingTime: 40 },
    { name: 'Chicken Burger', diet: 'Non-Vegetarian', cookingTime: 35 },
    { name: 'Chicken Biryani', diet: 'Non-Vegetarian', cookingTime: 60 },
    { name: 'Chole Bature', diet: 'Vegetarian', cookingTime: 120 }, 
    { name: 'Dal Makhani', diet: 'Vegetarian', cookingTime: 100 },
    { name: 'Jalebi', diet: 'Vegetarian', cookingTime: 100 },
    { name: 'Matar Paneer', diet: 'Vegetarian', cookingTime: 45 },
    { name: 'Pav Bhaji', diet: 'Vegetarian', cookingTime: 30 },
    { name: 'Pani Puri', diet: 'Vegetarian', cookingTime: 30 },
    { name: 'Pizza', diet: 'Non-Vegetarian', cookingTime: 75 },
    { name: 'Rasgulla', diet: 'Vegetarian', cookingTime: 60 },
    { name: 'Samosa', diet: 'Vegetarian', cookingTime: 60 },
    { name: 'Payasam', diet: 'Vegetarian', cookingTime: 25 },
    { name: 'Mousse Cake', diet: 'Non-Vegetarian', cookingTime: 35 },  
    { name: 'Chicken wings', diet: 'Non-Vegetarian', cookingTime: 45 },
    { name: 'tacos', diet: 'Non-Vegetarian', cookingTime: 30 },
    { name: 'Maggie', diet: 'Vegetarian', cookingTime: 5 },
    { name: 'Rainbow Cake', diet: 'Non-Vegetarian', cookingTime: 30 },
    { name: 'Sheer Kurma', diet: 'Vegetarian', cookingTime: 25 },
    { name: 'Brownies', diet: 'Non-Vegetarian', cookingTime: 30 },
    { name: 'Lasagna', diet: 'Vegetarian', cookingTime: 45 },
    { name: 'Pasta', diet: 'Vegetarian', cookingTime: 15 },
    { name: 'Pan Cake', diet: 'Vegetarian', cookingTime: 20 },
    { name: 'Loaded Nachos', diet: 'Vegetarian', cookingTime: 25 },
];

document.getElementById('filterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const diet = document.getElementById('diet').value;
    const cookingTime = document.getElementById('cookingTime').value;

    const filteredRecipes = recipes.filter(recipe => {
        const matchesDiet = (diet === 'all' || recipe.diet.toLowerCase() === diet.toLowerCase());
        const matchesTime = (cookingTime === '' || recipe.cookingTime <= parseInt(cookingTime));
        return matchesDiet && matchesTime;
    });

    displayRecipes(filteredRecipes);
});

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.className = 'recipe-item';

        const recipeName = document.createElement('h3');
        recipeName.className = 'recipe-name';
        recipeName.innerText = recipe.name;
        recipeItem.appendChild(recipeName);

        const recipeDiet = document.createElement('p');
        recipeDiet.innerHTML = `<span class="heading">Dietary Preference:</span> <span class="detail">${recipe.diet}</span>`;
        recipeItem.appendChild(recipeDiet);

        const recipeTime = document.createElement('p');
        recipeTime.innerHTML = `<span class="heading">Cooking Time:</span> <span class="detail">${recipe.cookingTime} minutes</span>`;
        recipeItem.appendChild(recipeTime);

        recipeList.appendChild(recipeItem);
    });
}

// Initial display of all recipes
displayRecipes(recipes);
