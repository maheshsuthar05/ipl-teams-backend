import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import playerRoutes from './routes/players.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit : "30mb", extended : true }));
app.use(express.json({ limit : "30mb", extended : true }));
app.use(bodyParser.urlencoded({ limit : "30mb", extended : true }));
app.use(express.urlencoded({ limit : "30mb", extended : true }));
app.use(cors());
app.use('/teams', playerRoutes);

app.get('/',(req, res) => {
    res.send("Hello to IPL Database")
})

//const CONNECTION_URL = 'mongodb+srv://maheshsuthar:mahesh8438@cluster0.qv2sj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => app.listen(PORT,() => console.log(`server running on port : ${PORT}`)))
    .catch((error)=> console.log(error.message))
