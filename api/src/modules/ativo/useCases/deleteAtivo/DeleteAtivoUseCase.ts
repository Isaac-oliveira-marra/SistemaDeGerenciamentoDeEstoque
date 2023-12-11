import { prisma } from "../../../../prisma/client";
import { DeleteAtivoDto } from "../../dto/DeleteAtivoDto";

export class DeleteAtivoUseCase {

    async execute({id}: DeleteAtivoDto) {
        const findAtivo = await prisma.ativo.findUnique({
            where: {
                id
            }
        })

        if (!findAtivo) {
           return 'ativo nao existe'
        }
 
        const deleteAtivo = await prisma.ativo.delete({
            where: {
                id
            }
        })
        
        return deleteAtivo
    }
}

