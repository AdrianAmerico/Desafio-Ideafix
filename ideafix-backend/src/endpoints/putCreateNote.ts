import { Response, Request } from "express";
import connection from "../connection";
import { Post } from "../types";

const putCreateNote = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const { topic, message } = req.body;

    if (!topic || !message) {
      errorCode = 422;
      throw new Error("invalid body");
    }

    const id = Date.now().toString();

    const post: Post = {
      id,
      topic,
      message,
    };

    await connection("Notes").insert(post);
    console.log(post);
    res.status(201).send(post);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};

export default putCreateNote;
