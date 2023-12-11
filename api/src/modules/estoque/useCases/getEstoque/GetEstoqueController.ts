import { Request, Response } from "express";
import { GetEstoqueUseCase } from "./GetEstoqueUseCase";

export class GetEstoqueController{
    async handle(req: Request, res: Response) {

        const idString = req.params.id

        const id = Number(idString)

        const getEstoqueUseCase = new GetEstoqueUseCase()

        const result  = await getEstoqueUseCase.execute({id})

        return res.json(result)
    }
}