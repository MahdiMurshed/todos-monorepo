import express, { Request, Response } from "express";
import cors from "cors";
import blogSourceRouter from "./routes/blogSource";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

app.use("/api/blogsource", blogSourceRouter);

app.listen(3080, () => {
  console.log("Server is running on port 3080");
});
