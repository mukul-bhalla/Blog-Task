import express from 'express'
import mongoose from 'mongoose'

import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((e) => {
        console.log(e);
        console.log("Mongo Error")
    })
const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
// 3cvzunCDu44V5pZV