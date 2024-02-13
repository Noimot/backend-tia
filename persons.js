const express = require("express");
const personsRouter = require('./routes/persons');
const infoRoute = require('./routes/info');
const app = express();
const port = 8000;


app.use('/api', personsRouter);
app.use('/info', infoRoute);
app.get("/", (req, res) => {
  res.send("exercises!");
});

app.listen(port, () => {
  console.log(`Exercise app listening on port ${port}`);
});
