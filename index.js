const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config()

// middlewares
app.use(express.json());
app.use(cors());

// database
require('./db')

// routes
app.use(require('./routes/auth'));
app.use(require('./routes/note'));

const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Evernote server is listening at http://localhost:${port}`)
})