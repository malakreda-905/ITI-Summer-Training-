import mongoose from "mongoose";
import { Member } from "../models/Member.js";

export const getMembers = async (req, res) => {
    try {
        const members = await Member.find({});

        res.json(members);
    }
    catch (err) {
        res.status(500).json("internal server error");
    }
};

export const getMemberById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json("invalid id");
            return;
        }

        const member = await Member.findById(req.params.id);

        if (!member) {
            res.status(404).json("member not found");
            return;
        }

        res.json(member);
    }
    catch (err) {
        res.status(500).json("internal server error");
    }
};

export const createMember = async (req, res) => {
    try {
        const member = await Member.create(req.body);

        res.status(201).json(member);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
};

export const updateMember = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json("invalid id");
            return;
        }

        const member = await Member.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!member) {
            res.status(404).json("member not found");
            return;
        }

        res.json(member);
    }
    catch (err) {
        res.status(500).json("internal server error");
    }
};

export const deleteMember = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json("invalid id");
            return;
        }

        const member = await Member.findByIdAndDelete(req.params.id);

        if (!member) {
            res.status(404).json("member not found");
            return;
        }

        res.json(member);
    }
    catch (err) {
        res.status(500).json("internal server error");
    }
};