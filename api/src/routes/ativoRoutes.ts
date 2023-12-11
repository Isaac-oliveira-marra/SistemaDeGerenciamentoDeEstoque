import { Router } from "express";
import { CreateAtivoController } from "../modules/ativo/useCases/createAtivo/CreateAtivoController";
import { DeleteAtivoController } from "../modules/ativo/useCases/deleteAtivo/DeleteAtivoController";
import { GetAtivoController } from "../modules/ativo/useCases/getAtivo/GetAtivoController";
import { UpdateAtivoController } from "../modules/ativo/useCases/updateAtivo/UpdateClasseController";

const createAtivoController = new CreateAtivoController()
const getAtivoController = new GetAtivoController()
const deleteAtivoController = new DeleteAtivoController()
const updateAtivoController = new UpdateAtivoController()

const ativoRoutes = Router()

ativoRoutes.post("/", createAtivoController.handle)
ativoRoutes.get("/:id?", getAtivoController.handle)
ativoRoutes.delete("/:id", deleteAtivoController.handle)
ativoRoutes.put("/:id", updateAtivoController.handle)


export { ativoRoutes }