import { Router } from "express";
import TaskController from "./app/controllers/TaskController";

const routes = new Router();

routes.post("/task", TaskController.store);
routes.get("/task", TaskController.getTasks);
routes.get("/task/:id", TaskController.getTaskById);
routes.put("/task/:id", TaskController.update);

export default routes;