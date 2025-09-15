import { Router } from "express";
import TaskController from "./app/controllers/TaskController";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import auth from "./app/middlewares/auth";

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
routes.post("/users", UserController.create);

/**
 * Routes Sessions
 */
routes.post("/sessions", SessionController.store);

routes.use(auth);

routes.put("/users", UserController.update);

export default routes;