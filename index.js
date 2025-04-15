const express = require('express');
const app = express();

// Para servir arquivos HTML, CSS, JS da pasta "public"
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
  console.log('Site online em http://localhost:3000');
});