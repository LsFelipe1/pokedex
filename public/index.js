const express = require('express');
const app = express();

// Serve arquivos estáticos da pasta 'public'
app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Site online em http://localhost:3000');
});