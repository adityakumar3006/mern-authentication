import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to mongo db")
})
const app = express();


//mongo db pass- 
//adityakr4005
//mXTHO5s77cLgEc4d

app.listen(3000, () => {
    console.log("server running on 3000");
})


// app.get("/", (req, res) => {
//     res.json({
//         message: "Api is working",
//     })
// })
app.use("/api/user", userRoutes);