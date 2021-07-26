const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api', (req, res) => {
  res.json({ message: "O server ta firmao" })
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});