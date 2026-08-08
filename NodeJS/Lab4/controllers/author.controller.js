import mongoose from "mongoose";
import { Author } from "../models/Author.js";

export const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find({});

    res.json(authors);
  } catch (err) {
    res.status(500).json("internal server error");
  }
};

export const getAuthorById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json("invalid id");
      return;
    }

    const author = await Author.findById(req.params.id);

    if (!author) {
      res.status(404).json("author not found");
      return;
    }

    res.json(author);
  } catch (err) {
    res.status(500).json("internal server error");
  }
};

export const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);

    res.status(201).json(author);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

export const updateAuthor = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json("invalid id");
      return;
    }

    const author = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!author) {
      res.status(404).json("author not found");
      return;
    }

    res.json(author);
  } catch (err) {
    res.status(500).json("internal server error");
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json("invalid id");
      return;
    }

    const author = await Author.findByIdAndDelete(req.params.id);

    if (!author) {
      res.status(404).json("author not found");
      return;
    }

    res.json(author);
  } catch (err) {
    res.status(500).json("internal server error");
  }
};