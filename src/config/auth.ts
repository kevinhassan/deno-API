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
export const TOKEN_EXPIRATION = 60000;

const payload: Payload = {
  iss: "joe",
  exp: setExpiration(new Date().getTime() + TOKEN_EXPIRATION),
};
const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

export function encryptPassword(password: string) {
  return bcrypt.hash(password);
}

export function isPasswordEqual(
  password: string,
  hashedPassword: string,
) {
  return bcrypt.compare(password, hashedPassword);
}

export async function isJWTValid(jwt: string) {
  return jwt.length > 0 && (await validateJwt(jwt, key)).isValid;
}

export function generateJWT() {
  return makeJwt({ header, payload, key });
}
