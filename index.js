const express = require('express');
const app = express();
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

const Joi = require('joi');
const cors = require('cors');
require('dotenv').config();


const basketballRout = require('./routers/basketball')
const footballRouter = require('./routers/football');


const port = process.env.PORT;
const JWT_SECRET = 'secret-token';


app.use(cors());
app.use(express.json());


app.use('/football', footballRouter);
app.use('/basketball', basketballRout);

app.use('*', (req, res) => {
    res.status(404).send('page not found');
});

app.listen(port, () => {
    console.log(`server is up: ${port}`);
});







// app.use(expressJwt({ secret: JWT_SECRET }).unless({ path: ['/login', '/users'] }));

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     /*
//     const [users] = db.query('SELECT * FROM Users WHERE username = ? AND password = ?', [username, password]);
//      if (!users[0]) {
//         res.status(401).send("username and password don't match");
//         return;
//      }
//     */
//     const token = jwt.sign({ username }, JWT_SECRET);
//     res.send({ token });
// });
