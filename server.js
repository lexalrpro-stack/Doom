const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => res.send('ok'));

// Любой адрес -> игра (index.html лежит рядом с этим файлом)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('Hell Tail запущен на порту ' + PORT);
});
