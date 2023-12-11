import { Router } from "express";
import { CreateManutencaoController } from "../modules/manutencao/useCases/createManutencao/CreateManutencaoController";
import { DeleteManutencaoController } from "../modules/manutencao/useCases/deleteManutencao/DeleteManutencaoController";
import { GetManutencaoController } from "../modules/manutencao/useCases/getManutencao/GetManutencaoController";
import { UpdateManutencaoController } from "../modules/manutencao/useCases/updateManutencao/UpdatePropietarioController";


const createManutencaoController = new CreateManutencaoController()
const getManutencaoController = new GetManutencaoController()
const deleteManutencaoController = new DeleteManutencaoController()
const updateManutencaoController = new UpdateManutencaoController()

const manutencaoRoutes = Router()

manutencaoRoutes.post("/", createManutencaoController.handle)
manutencaoRoutes.get("/:id?", getManutencaoController.handle)
manutencaoRoutes.delete("/:id", deleteManutencaoController.handle)
manutencaoRoutes.put("/:id", updateManutencaoController.handle)


export { manutencaoRoutes }