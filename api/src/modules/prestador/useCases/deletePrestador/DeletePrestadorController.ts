import { Request, Response } from "express";
import { DeletePrestadorUseCase } from "./DeletePrestadorUseCase";

export class DeletePrestadorController {
    async handle(req: Request,  res: Response) {        
        const idString  = req.params.id

        const id = Number(idString)

        const deletePrestadorUseCase = new DeletePrestadorUseCase()

        const result = await deletePrestadorUseCase.execute({id})

        return res.json(result)
    }
}