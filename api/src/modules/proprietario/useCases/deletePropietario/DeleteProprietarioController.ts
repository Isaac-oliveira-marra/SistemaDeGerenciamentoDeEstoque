import { Request, Response } from "express";
import { DeleteProprietarioUseCase } from "./DeleteProprietarioUseCase";

export class DeleteProprietarioController {
    async handle(req: Request,  res: Response) {        
        const idString  = req.params.id

        const id = Number(idString)

        const deleteProprietarioUseCase = new DeleteProprietarioUseCase()

        const result = await deleteProprietarioUseCase.execute({id})

        return res.json(result)
    }
}