import { Request, Response } from "express";
import { UpdateProprietarioDto } from "../../dto/UpdateProprietarioDto";
import { UpdatePropietarioUseCase } from "./UpdatePropietarioUseCase";


export class UpdatePropietarioController {
    async handle(req: Request,  res: Response) {
        const { Nome, Contato, Descricao }: UpdateProprietarioDto = req.body
        
        const idString  = req.params.id

        const id = Number(idString)

        const updatePropietarioUseCase = new UpdatePropietarioUseCase()

        const result = await updatePropietarioUseCase.execute({ Nome, Contato, Descricao, id })

        return res.json(result)
    }
}