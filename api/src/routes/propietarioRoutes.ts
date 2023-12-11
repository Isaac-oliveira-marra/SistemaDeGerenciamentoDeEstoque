import { Router } from "express";
import { CreateProprietarioController } from "../modules/proprietario/useCases/createPropietario/CreateEstoqueController";
import { DeleteProprietarioController } from "../modules/proprietario/useCases/deletePropietario/DeleteProprietarioController";
import { GetPropietarioController } from "../modules/proprietario/useCases/getPropietario/GetPropietarioController";
import { UpdatePropietarioController } from "../modules/proprietario/useCases/updatePropietario/UpdatePropietarioController";


const createPropietarioController = new CreateProprietarioController()
const getPropietarioController = new GetPropietarioController()
const deletePropietarioController = new DeleteProprietarioController()
const updatePropietarioController = new UpdatePropietarioController()

const propietarioRoutes = Router()

propietarioRoutes.post("/", createPropietarioController.handle)
propietarioRoutes.get("/:id?", getPropietarioController.handle)
propietarioRoutes.delete("/:id", deletePropietarioController.handle)
propietarioRoutes.put("/:id", updatePropietarioController.handle)


export { propietarioRoutes }