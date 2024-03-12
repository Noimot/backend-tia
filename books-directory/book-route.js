const express = require('express');
const { getAllBooks, createBook } = require('./controller');

const router = express.Router();

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").get().put().delete();

module.exports = router;
