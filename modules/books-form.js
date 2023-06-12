/**
 * This module is used for all operations on the form.
 */

// Importing class from './books.js'
import BookCollection from './books.js';

// Importing functions from './storage.js'
import { saveBooksToStorage } from './storage.js';

// Create new object from BookCollection class and save it to the local storage
const newBook = new BookCollection();
newBook.saveData();

// Event listener for the form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  // Preventing the default form submission behavior
  event.preventDefault();

  // Retrieving the title and author input elements
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');

  // Extracting the values of the title and author inputs
  const title = titleInput.value;
  const author = authorInput.value;

  // Checking if both title and author have values
  if (title && author) {
    newBook.addBook(title, author);
    saveBooksToStorage(newBook.books);
    newBook.displayBooks();

    // Resetting the title and author input fields
    titleInput.value = '';
    authorInput.value = '';
  }
});