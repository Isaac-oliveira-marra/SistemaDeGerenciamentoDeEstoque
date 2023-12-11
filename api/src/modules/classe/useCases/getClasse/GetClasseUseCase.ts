import { prisma } from "../../../../prisma/client";
import { GetClasseDto } from "../../dto/GetClasseDto";

export class GetClasseUseCase{
    async execute ({id}: GetClasseDto) {
        const findClasse = await prisma.classe.findMany({})

        if(id) {
            const findClasseById = await prisma.classe.findUnique({
                where: {
                    id
                },
            })

            return findClasseById
        }
       
        return findClasse
    }
}