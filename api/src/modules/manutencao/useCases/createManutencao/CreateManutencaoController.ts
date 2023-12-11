import { Request, Response } from "express"
import { CreateManutencaoDto } from "../../dto/CreateManutencaoDto"
import { CreateManutencaoUseCase } from "./CreateManutencaoUseCase"

export class CreateManutencaoController {
    async handle(req: Request, res: Response) {
        const { Descricao, DataEnvio, DataSolucao, Valor, ativoId, prestadorId }: CreateManutencaoDto  = req.body

        const createManutencaoUseCase = new CreateManutencaoUseCase()

        const result = await createManutencaoUseCase.execute({ Descricao, DataEnvio, DataSolucao, Valor, ativoId, prestadorId })

        return res.status(201).json(result)
    }
}