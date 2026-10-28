const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Раздаём папку public (там лежит index.html с игрой)
app.use(express.static(path.join(__dirname, 'public')));

// Проверка состояния для Render (необязательно)
app.get('/health', (req, res) => res.send('ok'));

// Любой другой адрес -> игра
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('Hell Tail запущен на порту ' + PORT);
});
