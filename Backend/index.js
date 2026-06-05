import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import dbconnect from "./config/Connectdb.js"
import router from "./routes/test.route.js";
import authRoutes from "./routes/auth.routes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/test", router);
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
   dbconnect()
});