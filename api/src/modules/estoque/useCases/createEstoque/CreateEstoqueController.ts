import { Request, Response } from "express"
import { CreateEstoqueDTO } from "../../dto/CreateEstoqueDto"
import { CreateEstoqueUseCase } from "./CreateEstoqueUseCase"

export class CreateEstoqueController {
    async handle(req: Request, res: Response) {
        const { Descricao, Nome, Endereco, Telefone }: CreateEstoqueDTO  = req.body

        const createEstoqueUseCase = new CreateEstoqueUseCase()

        const result = await createEstoqueUseCase.execute({ Descricao, Nome, Endereco, Telefone })

        return res.status(201).json(result)
    }
}