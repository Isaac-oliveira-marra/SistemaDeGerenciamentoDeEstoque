import { Request, Response } from "express";
import { UpdateEstoqueDto } from "../../dto/UpdateEstoqueDto";
import { UpdateEstoqueUseCase } from "./UpdateEstoqueUseCase";

export class UpdateEstoqueController {
    async handle(req: Request,  res: Response) {
        const { Descricao, Endereco, Nome, Telefone }: UpdateEstoqueDto = req.body
        
        const idString  = req.params.id

        const id = Number(idString)

        const updateAdministratorUseCase = new UpdateEstoqueUseCase()

        const result = await updateAdministratorUseCase.execute({ Descricao, Endereco, Nome, Telefone, id })

        return res.json(result)
    }
}