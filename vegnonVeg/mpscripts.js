const mealPlanner = document.getElementById('meal-planner');
const recipeInputs = mealPlanner.querySelectorAll('.recipe-input');
const saveButton = document.getElementById('save-button');
let recipes = {};

// Load recipes from local storage
const storedRecipes = localStorage.getItem('recipes');
if (storedRecipes) {
    recipes = JSON.parse(storedRecipes);
    recipeInputs.forEach(input => {
        const key = input.dataset.day;
        if (recipes[key]) {
            input.value = recipes[key];
        }
    });
}

// Add event listener to each recipe input
recipeInputs.forEach(input => {
    input.addEventListener('input', () => {
        const key = input.dataset.day;
        recipes[key] = input.value;
    });
});

// Add event listener to save button
saveButton.addEventListener('click', () => {
    // Save recipes to local storage
    localStorage.setItem('recipes', JSON.stringify(recipes));
});
