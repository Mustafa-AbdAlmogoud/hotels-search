const express = require('express');

const path = require('path');

const app = express();
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

require('./config/env');

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`app runing on localhost:${PORT}`));
