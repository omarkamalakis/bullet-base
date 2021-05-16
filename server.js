/*
Bullet-base Express server

Hosts the pages and the web application.

  */
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('static'));

app.listen(port, async () => {
});
