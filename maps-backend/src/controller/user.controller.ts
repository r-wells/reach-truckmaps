import { Request, Response } from "express";
import { omit } from "lodash";
import { createUser } from "../service/user.service";
import log from "../logger";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    console.log('user created!');
    return res.send(omit(user.toJSON(), "password"));
  } catch (e) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}
