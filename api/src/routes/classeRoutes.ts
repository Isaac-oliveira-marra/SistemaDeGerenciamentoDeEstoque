import { Router } from "express";
import { CreateClasseController } from "../modules/classe/useCases/createClasse/CreateClasseController";
import { DeleteClasseController } from "../modules/classe/useCases/deleteClasse/DeleteClasseController";
import { GetClasseController } from "../modules/classe/useCases/getClasse/GetClasseController";
import { UpdateClasseController } from "../modules/classe/useCases/updateClasse/UpdateClasseController";

const createClasseController = new CreateClasseController()
const getClasseController = new GetClasseController()
const deleteClasseController = new DeleteClasseController()
const updateClasseController = new UpdateClasseController()

const classeRoutes = Router()

classeRoutes.post("/", createClasseController.handle)
classeRoutes.get("/:id?", getClasseController.handle)
classeRoutes.delete("/:id", deleteClasseController.handle)
classeRoutes.put("/:id", updateClasseController.handle)


export { classeRoutes }