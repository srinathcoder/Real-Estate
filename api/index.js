import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect("mongodb+srv://saiestate:saiestate%40230205@saiestate.bxr4r.mongodb.net/?retryWrites=true&w=majority&appName=SaiEstate")
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
