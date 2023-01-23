import { Router } from "express";
import {
  createBlogSource,
  getBlogSource,
  bulkCreateBlogSource,
} from "../controller/blogSource";

const blogSourceRouter = Router();
blogSourceRouter.post("/bulk", bulkCreateBlogSource);

blogSourceRouter.post("/", createBlogSource);
blogSourceRouter.get("/", getBlogSource);

export default blogSourceRouter;
