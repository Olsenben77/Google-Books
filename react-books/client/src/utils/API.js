import axios from "axios";

export default {
  // Gets all books
  getGoogleSearchBooks: function (q) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + q);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete(`/api/books/${id}`);
  },
  // Saves a book to the database
  getBooks: function () {
    return axios.get(`/api/books`);
  },
  getBook: function (id) {
    return axios.get(`/api/books/${id}`);
  },
  saveBook: function (saveBooks) {
    return axios.post(`/api/books`, saveBooks);
  },
};
