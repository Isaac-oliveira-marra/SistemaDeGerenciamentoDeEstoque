import { Request, Response } from "express"
import { CreatePropietarioDto } from "../../dto/CreateProprietarioDto"
import { CreateProprietarioUseCase } from "./CreateEstoqueUseCase"

export class CreateProprietarioController {
    async handle(req: Request, res: Response) {
        const { Nome, Contato, Descricao }: CreatePropietarioDto  = req.body

        const createProprietarioUseCase = new CreateProprietarioUseCase()

        const result = await createProprietarioUseCase.execute({ Nome, Contato, Descricao })

        return res.status(201).json(result)
    }
}