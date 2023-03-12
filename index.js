const express = require("express");
const bp = require("body-parser");
const cors = require("cors");
const mongoose = require ('mongoose')
const {createUser} = require('./controller/userController')
const { PORT, HOST, MONGO } = require("./constants/constants");
const app = express();

mongoose.connect(MONGO)
        .then(() => {console.log('DB OK')})
        .catch((err) => console.log('DB ERROR', err))

app.use(bp.json());
app.use(cors());
app.use(bp.urlencoded({ extended: false }));

app.post('/api/createUser', createUser);

app.listen(PORT, () => {
  console.log(`Server is running: http:/${HOST}:${PORT}`);
});