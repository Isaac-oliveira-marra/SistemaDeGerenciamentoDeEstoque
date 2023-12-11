import { prisma } from "../../../../prisma/client";
import { GetEstoqueDto } from "../../dto/GetEstoqueDto";

export class GetEstoqueUseCase{
    async execute ({id}: GetEstoqueDto) {
        const findAllUser = await prisma.estoque.findMany({})

        if(id) {
            const findEstoqueById = await prisma.estoque.findUnique({
                where: {
                    id
                },
            })

            return findEstoqueById
        }
       
        return findAllUser
    }
}