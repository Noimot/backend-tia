const books = require("./books-directory");

console.log(books, "books");

exports.getAllBooks = (req, res) => {
  res.status(200).json({
    status: "success",
    result: books.length,
    data: {
      books,
    },
  });
};

exports.createBook = (req, res) => {
  res.send("Done!");
  const newId = books.slice(-1).id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  books.push(newTour);
};

exports.updateBook = (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  const newBook = Object.assign({}, books[index], req.body);
  books[index] = newBook;

  res.status(200).json({
    status: "success",
    data: {
      book: newBook,
    },
  });
};

exports.deleteBook = (req, res) => {
  const id = Number(req.params.id);
  tours.filter((book) => book.id !== id);
  res.status(200).send("Book deleted successfully!");
};
