import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import studentRoutes from './routes/student.js'


const app = express();

app.use(bodyParser.json({limit:"20mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://mohamedqesi:cfp2020@cluster0.t5qut.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect (CONNECTION_URL,{
    //avoid warnings and errors
    useNewUrLParser:true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`connection is established and running on port: ${PORT}`)
)).catch( (err)=> console.log(err.message));

app.use('/', studentRoutes)