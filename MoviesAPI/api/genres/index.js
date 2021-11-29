import { genres } from "./genresData";
import express from "express";

const router = express.Router(); 
router.get('/', (req, res) => {
    res.json(genres);
});

export default router;