/**
 * This module is used to retrieve books from local storage or store them there.
 */
const storageKey = 'books';

export const getBooksFromStorage = () => {
  const books = JSON.parse(localStorage.getItem(storageKey));
  return books || [];
};

export const saveBooksToStorage = (books) => {
  localStorage.setItem(storageKey, JSON.stringify(books));
};
