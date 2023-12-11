import { prisma } from "../../../../prisma/client";
import { DeleteEstoqueDTO } from "../../dto/DeleteEstoqueDto";

export class DeleteEstoqueUseCase {

    async execute({id}: DeleteEstoqueDTO) {
        const findEstoque = await prisma.estoque.findUnique({
            where: {
                id
            }
        })

        if (!findEstoque) {
           return 'Estoque nao existe'
        }
 
        const deleteEstoque = await prisma.estoque.delete({
            where: {
                id
            }
        })
        
        return deleteEstoque
    }
}

