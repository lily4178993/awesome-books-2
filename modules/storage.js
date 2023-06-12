/**
 * This module is used to retrieve books from local storage or store them there.
 */
const storageKey = 'books';

export function getBooksFromStorage() {
  const books = JSON.parse(localStorage.getItem(storageKey));
  return books || [];
}

export function saveBooksToStorage(books) {
  localStorage.setItem(storageKey, JSON.stringify(books));
}
