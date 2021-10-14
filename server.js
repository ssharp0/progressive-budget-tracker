const express = require("express");
const { join } = require('path')

// local port 3000
const PORT = 3000;

// sync db
const syncDB = require('./db')

// create express app
const app = express();

// middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use(require("./routes/api.js"));

// sync the database and app to listen to heroku deoployed port or local port 3000
syncDB()
  .then(() => app.listen(process.env.PORT || PORT, () => {
    console.log(`App running on port ${PORT}!`);
  }))
  .catch(err => console.log(err))