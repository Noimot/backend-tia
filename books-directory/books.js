const express = require("express");
const bookRoute = require('./book-route');
const app = express();
const port = 5000;


app.use('/books', bookRoute);
app.get("/", (req, res) => {
  res.send("Books Api!");
});

app.listen(port, () => {
  console.log(`listening to book api on port ${port}`);
});
