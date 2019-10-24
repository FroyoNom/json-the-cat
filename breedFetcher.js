const request = require("request");
// breedName takes care of process.argv[2] on index.js
// have to follow the callback syntax from index.js (look at line 10 for example. and line 5 for what the callback looks like.)

const fetchBreedDescription =
  (breedName, callback) => {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
      const data = JSON.parse(body);
      if (data.length > 0) {
        callback(error, data[0].description);
      } else if (data.length === 0) {
        callback("please enter a name");
      }
    });
  };

module.exports = { fetchBreedDescription };
