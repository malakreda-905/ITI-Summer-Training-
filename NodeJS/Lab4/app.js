import express from "express";

import authorRouter from "./routers/author.router.js";
import bookRouter from "./routers/book.router.js";
import memberRouter from "./routers/member.router.js";
import borrowRouter from "./routers/borrow.router.js";

export const app = express();

app.use(express.json());

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/members", memberRouter);
app.use("/borrows", borrowRouter);

app.use((req, res) => {
  res.status(404).json("not found");
});