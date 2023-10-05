import express from  "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    //if user already exists 
    if( user ) {
        //returning a message to frontend
        return res.json({ message: "User already exists!" });
    }

    //else
    //hashing password (like making a new password of a simple hackable password)
    const hashedPassword = await bcrypt.hash(password, 10);

    //creating a new user (field : value pair) in the collection in the db 
    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    res.json({message: "User Registered Successfully"});
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({username}); 

    // if user with this user does not exists 
    if(!user) {
        return res.json({ message: "User Doesn't Exist!"});
    }

    //hashing the input password and comparing it with already registered hashed password
    //becoz you cannot unhash the hashed password 
    //hash the login password and copmare it with registered hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // if password does not matches
    if(!isPasswordValid) {
        return res.json({ message: "Username or Password is Incorrect!"});
    }

    //IF CORRECTLY LOGED IN
    // creating a token using jwt web token
    const token = jwt.sign({ id: user._id }, "secret" );
    res.json({ token, userID: user._id });

});

export { router as userRouter };

//middlewares to check correct token
export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, "secret", (err) => {
            if(err) return res.sendStatus(403);
            next();
        });    }
    else {
        res.sendStatus(401);
    }
};