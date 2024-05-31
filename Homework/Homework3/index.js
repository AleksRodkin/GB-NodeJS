// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

// — На каждой странице реализован счетчик просмотров
// — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.

const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");
const pathFile = path.join(__dirname, "counters.json");
const obj = JSON.parse(fs.readFileSync(pathFile));

app.get('/', function (req, res) {
  obj.mainPageCount += 1;
  res.send(`<h1>Главная страница</h1>
  <a href="/about">Страница About</a>
  <p>Просмотров данной страницы: ${obj.mainPageCount}</p>`);

  fs.writeFileSync(pathFile, JSON.stringify(obj, null, 2));
});
app.get('/about', function (req, res) {
  obj.aboutPageCount += 1;
  res.send(`<h1>Страница About</h1>
  <a href="/">Страница Main</a>
  <p>Просмотров данной страницы: ${obj.aboutPageCount}</p>`)

  fs.writeFileSync(pathFile, JSON.stringify(obj, null, 2));
});

app.listen(3000);