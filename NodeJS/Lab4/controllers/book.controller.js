import mongoose from "mongoose";
import { Book } from "../models/Book.js";

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find({})
            .populate("authorId");

        res.json(books);
    }
    catch (err) {
        res.status(500).json("internal server error");
    }
};

export const getBookById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json("invalid id");
            return;
        }

        const book = await Book.findById(req.params.id)
            .populate("authorId");

        if (!book) {
            res.status(404).json("book not found");
            return;
        }

        res.json(book);
    }
    catch (err) {
        res.status(500).json("internal server error");
    }
};

export const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);

        res.status(201).json(book);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
};

export const updateBook = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json("invalid id");
            return;
        }

        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!book) {
            res.status(404).json("book not found");
            return;
        }

        res.json(book);
    }
    catch (err) {
        res.status(500).json("internal server error");
    }
};

export const deleteBook = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json("invalid id");
            return;
        }

        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            res.status(404).json("book not found");
            return;
        }

        res.json(book);
    }
    catch (err) {
        res.status(500).json("internal server error");
    }
};