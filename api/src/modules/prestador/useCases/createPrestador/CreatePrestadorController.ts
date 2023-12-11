import { Request, Response } from "express"
import { CreatePrestadorDto } from "../../dto/CreatePrestadorDto"
import { CreatePrestadorUseCase } from "./CreatePrestadorUseCase"


export class CreatePrestadorController {
    async handle(req: Request, res: Response) {
        const { Nome, Descricao, Endereco, Telefone, proprietarioId }: CreatePrestadorDto  = req.body

        const createPrestadorUseCase = new CreatePrestadorUseCase()

        const result = await createPrestadorUseCase.execute({ Nome, Descricao, Endereco, Telefone, proprietarioId })

        return res.status(201).json(result)
    }
}