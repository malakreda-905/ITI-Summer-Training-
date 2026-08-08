import mongoose from "mongoose";
import { Borrow } from "../models/Borrow.js";

export const getBorrows = async (req, res) => {
    try {
        const borrows = await Borrow.find({})
            .populate("memberId")
            .populate("bookId");

        res.json(borrows);
    }
    catch (err) {
        res.status(500).json("internal server error");
    }
};

export const getBorrowById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json("invalid id");
            return;
        }

        const borrow = await Borrow.findById(req.params.id)
            .populate("memberId")
            .populate("bookId");

        if (!borrow) {
            res.status(404).json("borrow not found");
            return;
        }

        res.json(borrow);
    }
    catch (err) {
        res.status(500).json("internal server error");
    }
};

export const createBorrow = async (req, res) => {
    try {
        const borrow = await Borrow.create(req.body);

        res.status(201).json(borrow);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
};

export const updateBorrow = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json("invalid id");
            return;
        }

        const borrow = await Borrow.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!borrow) {
            res.status(404).json("borrow not found");
            return;
        }

        res.json(borrow);
    }
    catch (err) {
        res.status(500).json("internal server error");
    }
};

export const deleteBorrow = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json("invalid id");
            return;
        }

        const borrow = await Borrow.findByIdAndDelete(req.params.id);

        if (!borrow) {
            res.status(404).json("borrow not found");
            return;
        }

        res.json(borrow);
    }
    catch (err) {
        res.status(500).json("internal server error");
    }
};