import * as dotenv from 'dotenv';
dotenv.config()

import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://api-tests:${process.env.DBPASS}@cluster0.yuzhiih.mongodb.net/alura-node?`);

let db = mongoose.connection;

export default db;