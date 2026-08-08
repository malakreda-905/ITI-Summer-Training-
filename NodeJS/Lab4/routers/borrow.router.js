import express from "express";

import {
    getBorrows,
    getBorrowById,
    createBorrow,
    updateBorrow,
    deleteBorrow
} from "../controllers/borrow.controller.js";

const router = express.Router();

router.get("/", getBorrows);

router.get("/:id", getBorrowById);

router.post("/", createBorrow);

router.put("/:id", updateBorrow);

router.delete("/:id", deleteBorrow);

export default router;