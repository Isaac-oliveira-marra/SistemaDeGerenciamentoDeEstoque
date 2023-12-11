import { prisma } from "../../../../prisma/client";
import { DeleteManutencaoDto } from "../../dto/DeleteManutencaoDto";

export class DeleteManutencaoUseCase {

    async execute({id}: DeleteManutencaoDto) {
        const manutencao = await prisma.manutencao.findUnique({
            where: {
                id
            }
        })

        if (!manutencao) {
           return 'manutencao nao existe'
        }
 
        const deleteManutencaoDto = await prisma.manutencao.delete({
            where: {
                id
            }
        })
        
        return deleteManutencaoDto
    }
}

