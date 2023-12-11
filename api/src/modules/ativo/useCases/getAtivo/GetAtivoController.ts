import { Request, Response } from "express";
import { GetAtivoUseCase } from "./GetAtivoUseCase";

export class GetAtivoController{
    async handle(req: Request, res: Response) {

        const idString = req.params.id

        const id = Number(idString)

        const getAtivoUseCase = new GetAtivoUseCase()

        const result  = await getAtivoUseCase.execute({id})

        return res.json(result)
    }
}