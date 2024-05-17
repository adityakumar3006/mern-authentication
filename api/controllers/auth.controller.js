import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
    // console.log(req.body);

    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: "Success user created" })

    }
    catch (error) {
        // res.status(500).json(error.message)
        // next ia a kind of miidle ware instead of writing res.json (500).json(error.message)
        next(error);
        //or
        // next(errorHandler(300,"something went wrong"));  // custom error 

    }
};