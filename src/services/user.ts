import { ObjectId } from "../deps.ts";
import { User, users } from "../mod.ts";

export const getAll = async () => await users.find();

export const get = async (id: string) => await users.findOne({ _id: ObjectId(id) });

export const add = async (user: User) => await users.insertOne(user);

export const remove = async (id: string) => await users.deleteOne({ _id: ObjectId(id) });

export const update = async (updatedUser: User, userId: string) =>
  await users.updateOne(
    { _id: ObjectId(userId) },
    { $set: updatedUser },
  );
