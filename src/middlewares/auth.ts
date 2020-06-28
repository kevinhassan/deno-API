import { Context } from "../deps.ts";
import { auth } from "../mod.ts";

export const authGuard = async (ctx: Context, next: () => Promise<void>) => {
  const rt = ctx.response.headers.get("authorization");
  if (rt && auth.isJWTValid(rt)) {
    await next();
  } else {
    ctx.throw(403, "Authentication failed");
  }
};
