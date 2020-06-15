import { Application } from "./deps.ts";
import { router, env } from "./mod.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on : ${env.HOST}:${env.PORT}`);
await app.listen({ port: env.PORT });
