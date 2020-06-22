import {
  Payload,
  setExpiration,
  Jose,
  validateJwt,
  makeJwt,
  bcrypt,
} from "../deps.ts";
import { env } from "../mod.ts";

const key = env.SECRET_JWT;

const payload: Payload = {
  iss: "joe",
  exp: setExpiration(new Date().getTime() + 60000),
};
const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

export async function encryptPassword(password: string) {
  return await bcrypt.hash(password);
}

export async function isPasswordEqual(
  password: string,
  hashedPassword: string,
) {
  return await bcrypt.compare(password, hashedPassword);
}

export async function isJWTValid(jwt: string) {
  return (await validateJwt(jwt, key)).isValid;
}

export async function createJWT() {
  return makeJwt({ header, payload, key });
}
