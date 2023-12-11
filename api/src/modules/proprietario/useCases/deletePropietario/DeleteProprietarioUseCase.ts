import { prisma } from "../../../../prisma/client";
import { DeleteProprietarioDto } from "../../dto/DeleteProprietarioDto";

export class DeleteProprietarioUseCase {

    async execute({id}: DeleteProprietarioDto) {
        const findProprietario = await prisma.proprietario.findUnique({
            where: {
                id
            }
        })

        if (!findProprietario) {
           return 'proprietario nao existe'
        }
 
        const deleteProprietarioDto = await prisma.proprietario.delete({
            where: {
                id
            }
        })
        
        return deleteProprietarioDto
    }
}

