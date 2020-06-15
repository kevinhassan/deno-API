import { Router } from "./deps.ts";
import { UserController } from "./mod.ts";

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
  .get("/users", UserController.getUsers)
  .post("/users", UserController.addUser)
  .get("/users/:id", UserController.getUser)
  .put("/users/:id", UserController.updateUser)
  .delete("/users/:id", UserController.removeUser);
