import { Request, Response } from "express";
import { DeleteClasseUseCase } from "./DeleteClasseUseCase";

export class DeleteClasseController {
    async handle(req: Request,  res: Response) {        
        const idString  = req.params.id

        const id = Number(idString)

        const deleteClasseUseCase = new DeleteClasseUseCase()

        const result = await deleteClasseUseCase.execute({id})

        return res.json(result)
    }
}