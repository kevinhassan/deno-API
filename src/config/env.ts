import { bcrypt } from "../deps.ts";

const env = Deno.env.toObject();

const PORT = Number(env.PORT) || 8000;
const HOST = env.HOST || "127.0.0.1";

const SECRET_JWT = env.SECRET_JWT || "secretpassword";

const MONGODB_URI = env.MONGODB_URI || "mongodb://localhost:27017"

export { PORT, HOST, SECRET_JWT, MONGODB_URI };
