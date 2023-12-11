import { Request, Response } from "express";
import { GetManutencaoUseCase } from "./GetManutencaoUseCase";

export class GetManutencaoController{
    async handle(req: Request, res: Response) {

        const idString = req.params.id

        const id = Number(idString)

        const getManutencaoUseCase = new GetManutencaoUseCase()

        const result  = await getManutencaoUseCase.execute({id})

        return res.json(result)
    }
}