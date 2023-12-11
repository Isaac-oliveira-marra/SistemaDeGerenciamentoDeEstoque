import { Router } from "express";
import { CreatePrestadorController } from "../modules/prestador/useCases/createPrestador/CreatePrestadorController";
import { DeletePrestadorController } from "../modules/prestador/useCases/deletePrestador/DeletePrestadorController";
import { GetPrestadorController } from "../modules/prestador/useCases/getPrestador/GetPrestadorController";
import { UpdatePrestadorController } from "../modules/prestador/useCases/updatePrestador/UpdatePrestadorController";


const createPrestadorController = new CreatePrestadorController()
const getPrestadorController = new GetPrestadorController()
const deletePrestadorController = new DeletePrestadorController()
const updatePrestadorController = new UpdatePrestadorController()

const prestadorRoutes = Router()

prestadorRoutes.post("/", createPrestadorController.handle)
prestadorRoutes.get("/:id?", getPrestadorController.handle)
prestadorRoutes.delete("/:id", deletePrestadorController.handle)
prestadorRoutes.put("/:id", updatePrestadorController.handle)


export { prestadorRoutes }