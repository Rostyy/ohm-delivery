const shortid = require('shortid');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const ohmRoute = require('./routes/ohm');
app.use('/api', ohmRoute);

app.listen(3000, () => console.log('listening on port 3000'));
