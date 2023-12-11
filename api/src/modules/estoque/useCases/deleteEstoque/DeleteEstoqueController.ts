import { Request, Response } from "express";
import { DeleteEstoqueUseCase } from "./DeleteEstoqueUseCase";

export class DeleteEstoqueController {
    async handle(req: Request,  res: Response) {        
        const idString  = req.params.id

        const id = Number(idString)

        const deleteEstoqueUseCase = new DeleteEstoqueUseCase()

        const result = await deleteEstoqueUseCase.execute({id})

        return res.json(result)
    }
}