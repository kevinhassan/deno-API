import { MongoClient } from "../deps.ts";
import { env } from "../mod.ts";

const client = new MongoClient();
client.connectWithUri(env.MONGODB_URI);
export const database = client.database("deno");
