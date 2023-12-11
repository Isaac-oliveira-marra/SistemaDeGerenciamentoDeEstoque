import { Request, Response } from "express";
import { UpdateAtivoDto } from "../../dto/UpdateAtivoDto";
import { UpdateAtivoUseCase } from "./UpdateAtivoUseCase";



export class UpdateAtivoController {
    async handle(req: Request,  res: Response) {
        const {  Descricao, Marca, Modelo, classeId, estoqueId, proprietarioId }: UpdateAtivoDto = req.body
        
        const idString  = req.params.id

        const id = Number(idString)

        const updateAtivoUseCase = new UpdateAtivoUseCase()

        const result = await updateAtivoUseCase.execute({ Descricao, Marca, Modelo, classeId, estoqueId, proprietarioId, id })

        return res.json(result)
    }
}