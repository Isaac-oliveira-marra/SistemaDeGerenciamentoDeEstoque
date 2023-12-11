import { Request, Response } from "express";
import { DeleteAtivoUseCase } from "./DeleteAtivoUseCase";

export class DeleteAtivoController {
    async handle(req: Request,  res: Response) {        
        const idString  = req.params.id

        const id = Number(idString)

        const deleteAtivoUseCase = new DeleteAtivoUseCase()

        const result = await deleteAtivoUseCase.execute({id})

        return res.json(result)
    }
}