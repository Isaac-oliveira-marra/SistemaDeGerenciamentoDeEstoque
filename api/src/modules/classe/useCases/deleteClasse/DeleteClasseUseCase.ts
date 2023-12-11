import { prisma } from "../../../../prisma/client";
import { DeleteClasseDto } from "../../dto/DeleteClasseDto";

export class DeleteClasseUseCase {

    async execute({id}: DeleteClasseDto) {
        const findClasse = await prisma.classe.findUnique({
            where: {
                id
            }
        })

        if (!findClasse) {
           return 'classe nao existe'
        }
 
        const deleteClasseDto = await prisma.classe.delete({
            where: {
                id
            }
        })
        
        return deleteClasseDto
    }
}

