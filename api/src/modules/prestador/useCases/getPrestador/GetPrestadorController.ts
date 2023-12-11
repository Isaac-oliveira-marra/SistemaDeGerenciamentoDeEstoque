import { Request, Response } from "express";
import { GetPrestadorUseCase } from "./GetPrestadorUseCase";

export class GetPrestadorController{
    async handle(req: Request, res: Response) {

        const idString = req.params.id

        const id = Number(idString)

        const getPrestadorUseCase = new GetPrestadorUseCase()

        const result  = await getPrestadorUseCase.execute({id})

        return res.json(result)
    }
}