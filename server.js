const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const { ghibliFilms } = require ('./data.js');

app.use(cors());

app.get('/studio-ghibli', (req, res) => {
  res.json(ghibliFilms);
})

  app.get('/studio-ghibli/:id', (req, res) => {
    const film_item = ghibliFilms.find(film => film.id === req.params.id);
    res.json(film_item);
  });

  module.exports = {app};