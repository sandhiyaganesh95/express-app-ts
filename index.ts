import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import config from "./config";
import UserRoute from './src/routes/user';

//Connect to database
mongoose.connect(config.MONGO_URL).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...');
  process.exit();
});

//Create server
const app: Express = express();
app.get('/',(req: Request, res: Response) => {
  res.send('Express + Mongo CRUD with Typescript');
});
app.listen(config.PORT, () => {
  console.log( `Server running in http://localhost:${config.PORT}/`);
});

//Declare routes
app.use('/users', UserRoute);
