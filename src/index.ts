import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const MONGO_URI: string = process.env.MongoURI || 'mongodb+srv://rivunaskar0:sqdl@cluster0.c02ypwy.mongodb.net/Shopify?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI).then(() => {
    console.log("DB CONNECTED!");
})


// Middlewares
app.use(bodyParser.json());

app.use(cookieParser());
app.use(cors());

// Routes
app.use('/', router())


// Port
const port = process.env.PORT || 3000;

// Start Server Message
app.listen(port, () => {
    console.log(`App is running at ${port}`);
});

