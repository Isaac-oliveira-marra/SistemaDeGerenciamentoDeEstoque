import { prisma } from "../../../../prisma/client";
import { GetProprietarioDto } from "../../dto/GetProprietarioDto";

export class GetPropietarioUseCase{
    async execute ({id}: GetProprietarioDto) {
        const findProprietario = await prisma.proprietario.findMany({})

        if(id) {
            const findPropietarioById = await prisma.proprietario.findUnique({
                where: {
                    id
                },
            })

            return findPropietarioById
        }
       
        return findProprietario
    }
}