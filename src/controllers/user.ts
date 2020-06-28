import { UserService, User, auth } from "../mod.ts";

export async function getUsers(
  { response }: {
    response: any;
  },
) {
  response.status = 200;
  response.body = await UserService.getAll();
}

export async function getUserById(
  { params, response }: {
    params: any;
    response: any;
  },
) {
  response.status = 200;
  response.body = await UserService.getById(params.id);
}

export async function updateUser(
  { request, params, response }: {
    request: any;
    params: any;
    response: any;
  },
) {
  const user = (await request.body()).value as User;
  response.status = 200;
  response.body = await UserService.update(user, params.id);
}
export async function removeUser(
  { params, response }: {
    params: any;
    response: any;
  },
) {
  response.status = 200;
  response.body = await UserService.remove(params.id);
}
