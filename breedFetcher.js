const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.log("error: ", error);
      return;
    }
    if (body === []) {
      console.log("Invalid input, please make sure you input a cat breed");
      return;
    } else {
      let data = JSON.parse(body);
      if (data[0] === undefined) {
        console.log("There was an invalid input, please try again");
        return;
      }
      console.log(data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };