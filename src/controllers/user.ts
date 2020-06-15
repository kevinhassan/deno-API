import { UserService, User } from "../mod.ts";

export function getUsers(
  { response }: {
    response: any;
  },
) {
  response.status = 200;
  response.body = UserService.getAll();
}

export async function addUser(
  { request, response }: {
    request: any;
    response: any;
  },
) {
  const user = (await request.body()).value as User;
  response.status = 201;
  response.body = UserService.add(user);
}

export function getUser(
  { params, response }: {
    params: any;
    response: any;
  },
) {
  response.status = 200;
  response.body = UserService.get(params.id);
}

export async function updateUser(
  { request, response }: {
    request: any;
    response: any;
  },
) {
  const body = await request.body();
  const { user }: { user: User } = body;
  response.status = 200;
  response.body = UserService.update(user);
}
export function removeUser(
  { params, response }: {
    params: any;
    response: any;
  },
) {
  response.status = 200;
  response.body = UserService.remove(params.id);
}
