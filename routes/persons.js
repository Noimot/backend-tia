const express = require('express');
const {persons} = require('../data');

const router = express.Router();


router.get('/persons', (req, res) => {
  res.json(persons);
});
function generateRandomId() {
    return Math.floor(Math.random() * 100000);
  }

router.get('/persons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const person = persons.find((p) => p.id === id);
  
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
  
    res.json(person);
  });

  router.delete('/persons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const person = persons.filter((p) => p.id !== id);
    res.status(204)
  })

  router.post("/persons", (req, res) => {
    const { name, number } = req.body;
    const person = persons.find((p) => p.name === name)
    if (!name || !number) {
        return res.status(400).json({ error: 'Name or number is missing' });
    }
    if (person) {
        return res.status(400).json({ error: 'name must be unique' });
    }
    persons.push({ id: generateRandomId(), name, number });
    res.status(201).json(persons);
  })

module.exports = router;
