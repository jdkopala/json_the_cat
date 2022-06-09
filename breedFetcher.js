const request = require('request');
const args = process.argv.slice(2);
const query = args[0];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;

request(URL, (error, response, body) => {
  // console.log("response: ", response);
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
    // console.log("body: ", body);
    // console.log(typeof body);
    // console.log("typeof data: ", typeof data);
  }
});
