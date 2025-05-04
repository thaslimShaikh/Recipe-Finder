 const generateRecipeButton = document.getElementById('generate-recipe');
    const ingredientInput = document.getElementById('ingredient-input');
    const recommendedIngredients = document.querySelectorAll('.recommended-ingredient');
    const addedIngredients = document.getElementById('added-ingredients');
    const recipeOutput = document.getElementById('recipe-output');

    let ingredients = [];

    ingredientInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const ingredient = ingredientInput.value.trim();
        if (ingredient!== '') {
          ingredients.push(ingredient);
          renderAddedIngredients();
          ingredientInput.value = '';
        }
      }
    });

    recommendedIngredients.forEach((recommendedIngredient) => {
      recommendedIngredient.addEventListener('click', () => {
        const ingredient = recommendedIngredient.dataset.ingredient;
        ingredients.push(ingredient);
        renderAddedIngredients();
        updateRecommendedIngredients(recommendedIngredient);
      });
    });

    function renderAddedIngredients() {
      addedIngredients.innerHTML = '';
      ingredients.forEach((ingredient) => {
        const ingredientElement = document.createElement('span');
        ingredientElement.innerHTML = `
          ${ingredient}
          <button data-ingredient="${ingredient}">x</button>
        `;
        addedIngredients.appendChild(ingredientElement);

        const removeButton = ingredientElement.querySelector('button');
        removeButton.addEventListener('click', () => {
          const indexToRemove = ingredients.indexOf(removeButton.dataset.ingredient);
          ingredients.splice(indexToRemove, 1);
          renderAddedIngredients();
        });
      });
    }

    function updateRecommendedIngredients(selectedIngredient) {
      const recommendedIngredientsArray = Array.from(recommendedIngredients);
      const selectedIndex = recommendedIngredientsArray.indexOf(selectedIngredient);
      recommendedIngredientsArray.splice(selectedIndex, 1);
      const newRecommendedIngredient = getNewRecommendedIngredient(selectedIngredient.dataset.ingredient);
      recommendedIngredientsArray.push(newRecommendedIngredient);
      recommendedIngredients.innerHTML = '';
      recommendedIngredientsArray.forEach((recommendedIngredient) => {
        recommendedIngredients.appendChild(recommendedIngredient);
      });
    }

    function getNewRecommendedIngredient(selectedIngredient) {
      let newIngredient;
      switch (selectedIngredient) {
        case 'Garlic':
          newIngredient = 'Ginger';
          break;
        case 'Onion':
          newIngredient = 'Shallot';
          break;
        case 'Potato':
          newIngredient = 'Carrot';
          break;
        default:
          newIngredient = 'New Ingredient';
      }
      const newRecommendedIngredient = document.createElement('button');
      newRecommendedIngredient.className = 'ecommended-ingredient';
      newRecommendedIngredient.dataset.ingredient = newIngredient;
      newRecommendedIngredient.innerHTML = ${newIngredient} <span>+<span>;
      return newRecommendedIngredient;
    }

    generateRecipeButton.addEventListener('click', () => {
      if (ingredients.length < 3) {
        alert('Please enter at least three ingredients!');
        return;
      }

      const recipe = `
        <h2>Recipe for ${ingredients.join(', ')}</h2>
        <h3>Instructions:</h3>
        <p>Start by gathering all of your ingredients. In a large bowl, combine ${ingredients[0]} and ${ingredients[1]}. Mix until well combined. Gradually add ${ingredients.slice(2).join(', ')}, mixing continuously. Add ${ingredients[ingredients.length - 1]} (if using) and mix until the batter is smooth. Pour the batter into a greased 9x13 inch baking dish. Bake at 350 degrees for 25-30 minutes, or until a toothpick inserted into the center comes out clean. Let cool before serving.</p>
      `;

      recipeOutput.innerHTML = recipe;

      // Add a fade-in effect to the recipe output
      recipeOutput.style.opacity = 0;
      setTimeout(() => {
        recipeOutput.style.transition = 'opacity 0.5s';
        recipeOutput.style.opacity = 1;
      }, 100);
    });
