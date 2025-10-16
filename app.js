const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello CSTU DevOps! The deploy needs manual approval!. This is the real demo in the class. It is really working!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
