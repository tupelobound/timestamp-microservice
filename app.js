// set up express object
const express = require('express')
const app = express()
const port = 3000

// serve static assets from the 'public' directory
app.use(express.static('public'))

// serve HTML homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle empty date parameter
app.get("/api/timestamp", function(req, res) {
  var date = new Date();
  res.json({"unix": date.getTime(), "utc" : date.toUTCString()});
});

// Handle user input dates
app.get("/api/timestamp/:date_string", function(req, res) {
  
  // Assign string from url to variable
  var input = req.params.date_string;
  // Set up regular expression to check if string is only numbers
  var regEx = /^\d+$/;
  // Declare date variable
  var date;
  
  if (regEx.test(input)) { // Check if input string consists only of digits
    date = new Date(Number(input)); // make new date from string converted to number
    res.json({"unix": date.getTime(), "utc" : date.toUTCString()}); //return dates as json
  } else {
    date = new Date(input); // otherwise, make new date from string
    if (date == "Invalid Date") { // if date string was invalid, return error
      res.json({"error":"Invalid Date"});
    } else { //otherwise, return dates as json
      res.json({"unix": date.getTime(), "utc" : date.toUTCString()});
    }
  }
});

// listen on port 3000 for requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})