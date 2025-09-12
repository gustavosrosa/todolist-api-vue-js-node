import { Router } from "express";
import TaskController from "./app/controllers/TaskController";
import UserController from "./app/controllers/UserController";

const routes = new Router();

/**
 * Routes Tasks
 */
routes.post("/task", TaskController.store);
routes.get("/task", TaskController.getTasks);
routes.get("/task/:id", TaskController.getTaskById);
routes.put("/task/:id", TaskController.update);
routes.delete("/task/:id", TaskController.remove);

/**
 * Routes User
 */
routes.post("/user", UserController.create);

export default routes;