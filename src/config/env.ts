const env = Deno.env.toObject();

const PORT = Number(env.PORT) || 8000;
const HOST = env.HOST || "127.0.0.1";

export { PORT, HOST };
