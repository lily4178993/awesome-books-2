// Importing formValidation function from '../modules/books-form.js'
import { formValidation } from '../modules/books-form.js';

// Importing menuClickEvent function from '../modules/menu.js'
import { menuClickEvent } from '../modules/menu.js';

// Importing getCurrentDate function from '../modules/menu.js'
import { getCurrentDate } from '../modules/dateTime.js';

// Get the form submission
const form = document.querySelector('form');

// Event listener for the form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Call the form validation function
  formValidation();
});

// Call the menu click event function
// eslint-disable-next-line no-unused-expressions
menuClickEvent;

// Get date time
const dateTimeEl = document.querySelector('#datetime');
dateTimeEl.innerHTML = getCurrentDate();