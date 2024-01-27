#!/usr/bin/node

const request = require('request');

const apiUrl = "https://swapi-api.hbtn.io/api/films/";
const personajeId = "18";

request.get(apiUrl, (err, res, body) => {
  if (err) {
    console.error(err);
  }

  let wedgeCounter = 0;
  const filmsData = JSON.parse(body).results;

  filmsData.forEach((film) => {
    if (film.characters.find((character) => character.includes(personajeId))) {
      wedgeCounter++;
    }
  });

  console.log(wedgeCounter);
});
