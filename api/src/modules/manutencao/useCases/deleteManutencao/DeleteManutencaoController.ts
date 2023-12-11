import { Request, Response } from "express";
import { DeleteManutencaoUseCase } from "./DeleteManutencaoUseCase";

export class DeleteManutencaoController {
    async handle(req: Request,  res: Response) {        
        const idString  = req.params.id

        const id = Number(idString)

        const deleteManutencaoUseCase = new DeleteManutencaoUseCase()

        const result = await deleteManutencaoUseCase.execute({id})

        return res.json(result)
    }
}