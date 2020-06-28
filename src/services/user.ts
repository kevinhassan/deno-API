import { ObjectId } from "../deps.ts";
import { User, users, Utils } from "../mod.ts";

// TODO: change when SelectionCriteria will be added
export const getAll = async (
  excludedAttributes: Array<string> = ["password", "_id"],
) => {
  return (await users.find()).map((user) => {
    return {
      ...user,
      ...Utils.excludedAttributes(excludedAttributes)
    };
  });
};

export const getById = (id: string) => users.findOne({ _id: ObjectId(id) });

export const getByEmail = (email: string) => users.findOne({ email: email });

export const add = (user: User) => users.insertOne(user);

export const remove = (id: string) => users.deleteOne({ _id: ObjectId(id) });

export const update = (updatedUser: User, userId: string) =>
  users.updateOne(
    { _id: ObjectId(userId) },
    { $set: updatedUser },
  );
