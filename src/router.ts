import { authGuard } from "./mod.ts";
import { Router } from "./deps.ts";
import { UserController, AuthController } from "./mod.ts";

export const router = new Router({
  methods: [
    "DELETE",
    "GET",
    "PATCH",
    "POST",
    "PUT",
  ],
});
router
  .get("/users", authGuard, UserController.getUsers)
  .get("/users/:id", authGuard, UserController.getUserById)
  .put("/users/:id", authGuard, UserController.updateUser)
  .delete("/users/:id", authGuard, UserController.removeUser)
  .post("/auth/signin", AuthController.signin)
  .post("/auth/signup", AuthController.signup);
