import path from 'path';
import express from 'express';
import { fileURLToPath } from 'node:url';
const app = express();
const port = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.send('<body>testing 1 2 3<img src="img"/></body>');
});

app.get('/toolong', (req, res) => {
  res.send('<body><img src="/blahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahb"/></body>');
});

app.get('/blahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahbblahblahblahblahblahblahblahblahblahblahb', (req, res) => {
  res.sendFile(path.join(__dirname, 'cloud.png'));
});


app.get('/conflict', (req, res) => {
  res.send('<body><img src="/img"/><img src="/img/another"/></body>');
});

app.get('/img', (req, res) => {
  res.sendFile(path.join(__dirname, 'cloud.png'));
});

app.get('/img/another', (req, res) => {
  res.sendFile(path.join(__dirname, 'cloud.png'));
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
