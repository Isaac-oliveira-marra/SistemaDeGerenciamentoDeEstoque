import { Request, Response } from "express";
import { GetPropietarioUseCase } from "./GetPropietarioUseCase";

export class GetPropietarioController{
    async handle(req: Request, res: Response) {

        const idString = req.params.id

        const id = Number(idString)

        const getPropietarioUseCase = new GetPropietarioUseCase()

        const result  = await getPropietarioUseCase.execute({id})

        return res.json(result)
    }
}