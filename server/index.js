const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.resolve(__dirname, '.../client-form/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '.../client-form/build', 'index.html'));
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api', (req, res) => {
  res.json({ message: "O server ta firmao" })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});