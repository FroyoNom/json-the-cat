const request = require("request");
const args = process.argv.slice(2);
let url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;

request(url, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length > 0) {
    console.log("statusCode:", response && response.statusCode);
    console.log(data[0].description);
  } else if (data.length <= 0) {
    console.log("please enter a name");
  }
});
