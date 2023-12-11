import { Request, Response } from "express";
import { UpdateManutencaoDto } from "../../dto/UpdateManutencaoDto";
import { UpdateManutencaoUseCase } from "./UpdatePropietarioUseCase";


export class UpdateManutencaoController {
    async handle(req: Request,  res: Response) {
        const { Descricao, DataEnvio, DataSolucao, Valor, ativoId, prestadorId }: UpdateManutencaoDto = req.body
        
        const idString  = req.params.id

        const id = Number(idString)

        const updateManutencaoUseCase = new UpdateManutencaoUseCase()

        const result = await updateManutencaoUseCase.execute({ Descricao, DataEnvio, DataSolucao, Valor, ativoId, prestadorId, id })

        return res.json(result)
    }
}