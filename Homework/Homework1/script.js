// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require("http");
let mainPageCounter = 0;
let aboutPageCounter = 0;
const server = http.createServer((req, res) => {
  console.log("Запрос получен");
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    mainPageCounter++;
    res.end(
      `
      <h1>Hello world</h1>
      <p>Просмотров данной страницы: ${mainPageCounter}</p>
      <a href="/about">Ссылка на страницу /about</a>
      `
    );

  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    aboutPageCounter++;
    res.end(
      `
      <h1>About Page</h1>
      <p>Просмотров данной страницы: ${aboutPageCounter}</p>
      <a href="/">Ссылка на главную страницу</a>
      `
  );
    res.end("");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(
      `
      <h1>404 - Not found</h1>
      <a href="/">Ссылка на главную страницу</a>
      <p>\n</p>
      <a href="/about">Ссылка на страницу /about</a>
      `
    );
  }
});

const port = 3077;
server.listen(port, () => {
  console.log(`Сервер запущен, порт ${port}`);
});