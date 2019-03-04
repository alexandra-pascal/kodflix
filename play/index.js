const express = require('express');
// import express from 'express';

const app = express();


app.get('/', (req, res) => {
  res.end(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>Title of the document</title>
  </head>
  <body>
  The content of the document......
  </body>
    <a href="/">Home</a>
    <a href="/about">About</a>
    Hello
  </html>
  `);
});


app.get('/about', (req, res) => {
  res.end(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>Title of the document</title>
  </head>
  <body>
  The content of the document......
  </body>

    <a href="/">Home</a>
    <a href="/about">About</a>
    Hello about
  </html>
  `);
});

app.listen(3001);