import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import config from "./config";
import UserRoute from './src/routes/user';
import bodyParser from 'body-parser';
//Connect to database
mongoose.connect(config.MONGO_URL).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...');
  process.exit();
});

//Create server
const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req: Request, res: Response) => {
  res.send('Express + Mongo CRUD with Typescript');
});
app.listen(config.PORT, () => {
  console.log( `Server  running on http://localhost:${config.PORT}/`);
});

//Declare routes
app.use('/users', UserRoute);
