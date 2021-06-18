<<<<<<< HEAD
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
=======
const path = require("path");
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '../', 'public');
>>>>>>> 2421bf81c56a7b128c47b2e0259648c53c5d70f7
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
<<<<<<< HEAD
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
=======
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
>>>>>>> 2421bf81c56a7b128c47b2e0259648c53c5d70f7
});