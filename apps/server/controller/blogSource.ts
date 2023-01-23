import { Request, Response } from "express";
import prisma from "../db";
import { BlogSource } from "@prisma/client";

async function bulkCreateBlogSource(req: Request, res: Response) {
  const sources: BlogSource[] = req.body;
  try {
    const posts = await prisma.blogSource.createMany({
      data: sources,
    });
    return res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}

async function createBlogSource(req: Request, res: Response) {
  const source: BlogSource = req.body;
  try {
    const post = await prisma.blogSource.create({
      data: source,
    });
    return res.status(200).json({ post });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}

async function getBlogSource(req: Request, res: Response) {
  try {
    const sources = await prisma.blogSource.findMany();
    return res.status(200).json({ sources });
  } catch (error) {}
  res.status(200).send("Hello World");
}

export { createBlogSource, getBlogSource, bulkCreateBlogSource };
