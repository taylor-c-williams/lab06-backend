const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const { ghibliFilms } = require ('./data.js');

app.use(cors());

app.get('/studio-ghibli', (req, res) => {
  res.json(ghibliFilms);
})

  app.get('/studio-ghibli/:id', (req, res) => {
    const filmItem = ghibliFilms.find(film => film.id === Number(req.params.id));
    res.json(filmItem);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});