import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
import authRoute from "./routes/auth.js";
import conversationRoute from "./routes/conversations.js";
import messageRoute from "./routes/messages.js";
const router = express.Router();
import path from "path";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const app = express();
dotenv.config();

connectDB();

// Allows body to accept json data
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.get("/", (req, res) => {
  res.send("Hi  ");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

app.use(notFound);

app.use(errorHandler);

app.post("/register", async (req, resp) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("User already register");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});

// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

// app.get("/api/users/:username", (req, res) => {
//   const user = users.find((u) => u.username === req.params.username);
//   res.json(user);
// });

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
