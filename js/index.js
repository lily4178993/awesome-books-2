// Importing formValidation function from '../modules/books-form.js'
import { formValidation } from '../modules/books-form.js';

// Get the form submission
const form = document.querySelector('form');

// Event listener for the form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Call the form validation function
  formValidation();
});