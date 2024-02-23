import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import connectDB from "./databse/db.js";


connectDB()

const app = express();

app.use(cors({
    credentials:true,
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())


const server = http.createServer(app);

server.listen(4400, ()=>{
    console.log(`server is running on http://localhost:4400/`)
} )