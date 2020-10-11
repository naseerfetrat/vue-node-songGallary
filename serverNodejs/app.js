// eslint-disable-next-line
/* eslint-disable */

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const config = require("./config/config");
const app = express();
const mongoose = require('mongoose');
const user = require('./models/User')
const song = require('./models/Songs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("combined"));

app.use(express.static("public"));

require("./routes/routes")(app);


// db config
const url = config.db_url;

mongoose.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true })
    .then(() => {
        console.log("connected to mongodb")
        app.listen(config.port, () => {
            console.log(`the server is running on port ${config.port}`);
        })

    }).catch(err => { console.log(err)});

