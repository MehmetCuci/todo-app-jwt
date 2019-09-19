import express from "express";
import bodyParser from "body-parser";
import AuthRouter from "./routes"

import mongoose from "mongoose";
import cors from "cors";
mongoose.connect('mongodb://admin:admin1234@ds217208.mlab.com:17208/heroku_j38l9cft', {useNewUrlParser: true});

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors());

AuthRouter(app);

app.get('/', (req, res) => {
    res.send("Todo API V1.0")

});


app.listen(3333, () => console.log("Çalıştı..."))