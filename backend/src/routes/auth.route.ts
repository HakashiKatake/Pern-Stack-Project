import express from 'express';

const router = express.Router();

router.get("/login", (req, res) => {
    res.send("Login Successfully");
});

router.get("/logout", (req, res) => {
    res.send("Logout Successfully");
});

router.get("/signup", (req, res) => {    
    res.send("Signup Successfully");
});

export default router;

