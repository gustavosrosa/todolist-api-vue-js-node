import { Router } from "express";
import TaskController from "./app/controllers/TaskController";

const routes = new Router();

routes.post("/task", TaskController.store);
routes.get("/task", TaskController.getTasks);
routes.get("/task/:id", TaskController.getTaskById);

export default routes;