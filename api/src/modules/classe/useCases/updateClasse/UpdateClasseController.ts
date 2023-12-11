import { Request, Response } from "express";
import { UpdateClasseDto } from "../../dto/UpdateClasseDto";
import { UpdateClasseUseCase } from "./UpdateClasseUseCase";



export class UpdateClasseController {
    async handle(req: Request,  res: Response) {
        const { Nome, Descricao }: UpdateClasseDto = req.body
        
        const idString  = req.params.id

        const id = Number(idString)

        const updateClasseUseCase = new UpdateClasseUseCase()

        const result = await updateClasseUseCase.execute({ Nome, Descricao, id })

        return res.json(result)
    }
}