import { prisma } from "../../../../prisma/client";
import { DeletePrestadorDto } from "../../dto/DeletePrestadorDto";

export class DeletePrestadorUseCase {

    async execute({id}: DeletePrestadorDto) {
        const findPrestador = await prisma.prestador.findUnique({
            where: {
                id
            }
        })

        if (!findPrestador) {
           return 'prestador nao existe'
        }
 
        const deletePrestador = await prisma.prestador.delete({
            where: {
                id
            }
        })
        
        return deletePrestador
    }
}

