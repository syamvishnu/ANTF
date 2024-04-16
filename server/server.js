import Express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors"

connectDB();
dotenv.config();
const app = Express();
const port = process.env.PORT || 5000;
app.use(cors());

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use("/", userRoutes);

// app.get("/", (req, res) => res.send("Server Is Ready"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
