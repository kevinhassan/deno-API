import { UserService, User, auth } from "../mod.ts";

interface UserCredentials {
  email: string;
  password: string;
}

export async function signin(
  { request, response }: {
    request: any;
    response: any;
  },
) {
  const userCredentials = (await request.body()).value as UserCredentials;
  const userFound = await UserService.getByEmail(userCredentials.email);
  if (
    userFound &&
    await auth.isPasswordEqual(userCredentials.password, userFound.password)
  ) {
    response.status = 200;
    response.body = {
      token_type: "Bearer",
      expires_in: auth.TOKEN_EXPIRATION,
      access_token: auth.generateJWT(),
    };
  } else {
    response.status = 403;
  }
}

export async function signup(
  { request, response }: {
    request: any;
    response: any;
  },
) {
  const user = (await request.body()).value as User;
  user.password = await auth.encryptPassword(user.password);
  response.status = 201;
  response.body = await UserService.add(user);
}
