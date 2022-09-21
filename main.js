const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();


app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(process.env.PORT || 5000, function () {
  console.log(`listening on ${process.env.PORT || 5000}`);
});