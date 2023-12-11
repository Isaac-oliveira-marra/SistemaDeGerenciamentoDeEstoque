import { prisma } from "../../../../prisma/client";
import { GetPrestadorDto } from "../../dto/GetPrestadorDto";

export class GetPrestadorUseCase{
    async execute ({id}: GetPrestadorDto) {
        const findPrestador = await prisma.prestador.findMany({
            include: {
                propietario: {
                    select: {
                        Nome: true
                    }
                }
            }
        })

        if(id) {
            const findPrestadorById = await prisma.prestador.findUnique({
                where: {
                    id
                },
                include: {
                    propietario: {
                        select: {
                            Nome: true
                        }
                    }
                }
            })

            return findPrestadorById
        }
       
        return findPrestador
    }
}