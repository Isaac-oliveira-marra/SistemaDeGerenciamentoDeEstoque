import { Router } from "express";
import { CreateEstoqueController } from "../modules/estoque/useCases/createEstoque/CreateEstoqueController";
import { DeleteEstoqueController } from "../modules/estoque/useCases/deleteEstoque/DeleteEstoqueController";
import { GetEstoqueController } from "../modules/estoque/useCases/getEstoque/GetEstoqueController";
import { UpdateEstoqueController } from "../modules/estoque/useCases/updateEstoque/UpdateEstoqueController";

const createEstoqueController = new CreateEstoqueController()
const getEstoqueController = new GetEstoqueController()
const deleteEstoqueController = new DeleteEstoqueController()
const updateEstoqueController = new UpdateEstoqueController()

const estoqueRoutes = Router()

estoqueRoutes.post("/", createEstoqueController.handle)
estoqueRoutes.get("/:id?", getEstoqueController.handle)
estoqueRoutes.delete("/:id", deleteEstoqueController.handle)
estoqueRoutes.put("/:id", updateEstoqueController.handle)


export { estoqueRoutes }