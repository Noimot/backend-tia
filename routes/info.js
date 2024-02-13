const express = require("express");
const {persons} = require("../data");
const router = express.Router();


router.get('/', (req, res) => {
    const currentTime = new Date();
    const personCount = persons.length;
  
    const responseText = `
      <p>Phonebook has info for ${personCount} people</p>
      <p>${currentTime}</p>
    `;
  
    res.send(responseText);
  });
  
  module.exports = router;
