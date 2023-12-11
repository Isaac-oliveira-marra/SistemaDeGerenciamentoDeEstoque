import { Request, Response } from "express";
import { UpdatePrestadorDto } from "../../dto/UpdatePrestadorDto";
import { UpdatePrestadorUseCase } from "./UpdatePrestadorUseCase";



export class UpdatePrestadorController {
    async handle(req: Request,  res: Response) {
        const { Nome, Descricao, Endereco, Telefone, proprietarioId }: UpdatePrestadorDto = req.body
        
        const idString  = req.params.id

        const id = Number(idString)

        const updatePrestadorUseCase = new UpdatePrestadorUseCase()

        const result = await updatePrestadorUseCase.execute({ Nome, Descricao, Endereco, Telefone, proprietarioId, id })

        return res.json(result)
    }
}