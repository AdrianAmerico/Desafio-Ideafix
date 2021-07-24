import { Request, Response } from "express";
import connection from "../connection";
import taskValidade from "../functions/taskValidade";

const deleteNotes = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
      errorCode = 422;
      throw new Error("invalid params");
    }

    const response = await taskValidade(id);

    if (response) {
      errorCode = 404;
      throw new Error("task not found");
    }

    await connection("Notes").delete().where({ id });
    res.status(201).send("deleted");
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};

export default deleteNotes;
