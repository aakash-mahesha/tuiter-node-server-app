import express from 'express';
import HelloController from './controllers/hello-controller.js';
import UserController from './users/users-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js'
import cors from 'cors';
import session from "express-session";
import AuthController from './users/auth-controller.js';
import "dotenv/config";
import mongoose from 'mongoose';

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING)
const app = express();
app.use(cors({
  
    credentials: true,
    origin: [process.env.FRONTEND_URL,process.env.FRONTEND_DEPLOY_URL]

}));

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
const port = process.env.PORT || 4000;
HelloController(app);
UserController(app);
TuitsController(app);
AuthController(app);
app.listen(port);