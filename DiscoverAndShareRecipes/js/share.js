// JavaScript code for form validation and submission

// Array to store submitted recipes
let recipes = [];

// Retrieve the form element
const form = document.getElementById('submit-form');

// Function to handle form submission
function submitRecipe(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form values
  const recipeName = document.getElementById('recipe-name').value;
  const ingredients = document.getElementById('ingredients').value;
  const instructions = document.getElementById('instructions').value;
  const category = document.getElementById('category').value;

  // Perform validation
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(recipeName)) {
    alert('Invalid recipe name. Please enter letters and spaces only.');
    return;
  }

  // Create a recipe object
  const recipe = {
    name: recipeName,
    ingredients: ingredients,
    instructions: instructions,
    category: category
  };

  // Add the recipe to the recipes array
  recipes.push(recipe);

  // Clear the form inputs
  form.reset();

  // Display success message
  const successMessage = document.createElement('p');
  successMessage.classList.add('success-message');
  successMessage.textContent = 'Recipe submitted successfully! Thank you for sharing your recipe with us.';
  form.appendChild(successMessage);
}

// Event listener for form submission
form.addEventListener('submit', submitRecipe);