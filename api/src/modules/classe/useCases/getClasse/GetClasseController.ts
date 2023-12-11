import { Request, Response } from "express";
import { GetClasseUseCase } from "./GetClasseUseCase";

export class GetClasseController{
    async handle(req: Request, res: Response) {

        const idString = req.params.id

        const id = Number(idString)

        const getClasseUseCase = new GetClasseUseCase()

        const result  = await getClasseUseCase.execute({id})

        return res.json(result)
    }
}