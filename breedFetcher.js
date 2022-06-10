const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return ("error: ", error);
    }
    let data = JSON.parse(body);
    // console.log("data: ", data)
    if (data[0] === undefined) {
      callback("There was an invalid input, please try again");
    } else {
      callback(null, data[0].description);
    }
  });
};

// fetchBreedDescription('Siberian')

module.exports = { fetchBreedDescription };