/*
Bullet-base Express server

Hosts the pages and the web application.

  */

import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, async () => {
  console.log(`bullet-base listening on port ${port}!`);
});
