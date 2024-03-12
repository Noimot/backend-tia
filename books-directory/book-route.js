const express = require("express");
const {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("./controller");

const router = express.Router();

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").get().put(updateBook).delete(deleteBook);

module.exports = router;
