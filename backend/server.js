import express from "express";
import connectDB from "../config/db.js";
import usersRoute from "./routes/api/userRoutes.js";
import postsRoute from "./routes/api/postRoutes.js";
import profileRoute from "./routes/api/profileRoutes.js";
import authRoute from "./routes/api/authRoutes.js";

const app = express();
connectDB();

// Middleware for accecpting JSON
app.use(express.json());

// Define Routes

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);
app.use("/api/posts", postsRoute);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("API Running"));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
