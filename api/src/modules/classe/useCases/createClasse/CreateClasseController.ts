import { Request, Response } from "express"
import { CreateClasseDto } from "../../dto/CreateClasseDto"
import { CreateClasseUseCase } from "./CreateClasseUseCase"

export class CreateClasseController {
    async handle(req: Request, res: Response) {
        const { Nome, Descricao }: CreateClasseDto  = req.body

        const createClasseUseCase = new CreateClasseUseCase()

        const result = await createClasseUseCase.execute({ Nome, Descricao })

        return res.status(201).json(result)
    }
}