import { database } from "../config/database.ts";
import { ObjectId } from "../deps.ts";

export interface User {
  _id?: ObjectId;
  username: string;
  email: string;
  password: string;
}

export const users = database.collection<User>("users");
