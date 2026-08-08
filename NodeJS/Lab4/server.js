import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5050;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log("http://localhost:" + PORT);
});

connectDB();