import { User } from "../mod.ts";
const data = JSON.parse(Deno.readTextFileSync("./db.json"));

export const users: Array<User> = data.users;

export const getAll = () => users;

export const get = (id: number) => users.filter((user) => user.id === id);

export const add = (user: User) => [...users, user];

export const remove = (id: number) => users.filter((user) => user.id !== id);

export const update = (newUser: User) =>
  users.map((user) => user.id === newUser.id ? newUser : user);
