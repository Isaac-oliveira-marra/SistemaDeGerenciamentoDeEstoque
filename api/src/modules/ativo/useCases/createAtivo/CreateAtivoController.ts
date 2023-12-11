import { Request, Response } from "express"
import { CreateAtivoDto } from "../../dto/CreateAtivoDto"
import { CreateAtivoUseCase } from "./CreateAtivoUseCase"

export class CreateAtivoController {
    async handle(req: Request, res: Response) {
        const { Descricao, Marca, Modelo, classeId, estoqueId, proprietarioId }: CreateAtivoDto  = req.body

        const createAtivoUseCase = new CreateAtivoUseCase()

        const result = await createAtivoUseCase.execute({ Descricao, Marca, Modelo, classeId, estoqueId, proprietarioId })

        return res.status(201).json(result)
    }
}