import express from 'express';
import route from './routes/route.js';
import connectDB from './db/db.js';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
dotenv.config();


const DATABASEURL = process.env.DATABASEURL || 'mongodb://localhost:27017/studentdb';

const app = express();
const port = 3000;

app.set('views','./views');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: true }));

connectDB(DATABASEURL);

app.use('/', route);
app.get('/health', (req, res) => {
    res.json({ status: "UP" });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    time: new Date(),
  });
});


app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running : http://localhost:${port}`);
});

