const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);



const fetchDocument = function(url, path){
  request(url, (error, response, body) => {
    if (error) {
      console.log("Invalid URL");
    } else {
      fs.writeFile(path, body, () => {
      });
    }
    // console.log(response.statusCode);
    // console.log('error:', error.errno); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log("+_+_+_+_+_+_+_+_+_+", response.statusCode);

  });
};

if (args[0] && args[1]) {
  console.log(fetchDocument(args[0], args[1]));
}