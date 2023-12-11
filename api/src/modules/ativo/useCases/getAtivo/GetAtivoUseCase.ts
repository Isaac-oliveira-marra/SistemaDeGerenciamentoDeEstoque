import { prisma } from "../../../../prisma/client";
import { GetAtivoDto } from "../../dto/GetAtivoDto";

export class GetAtivoUseCase{
    async execute ({id}: GetAtivoDto) {
        const findAtivo = await prisma.ativo.findMany({
            include: {
                classe: {
                    select: {
                        Nome: true
                    }
                },
                estoque: {
                    select: {
                        Nome: true
                    }
                },
                propietario:{
                    select: {
                        Nome: true
                    }
                },
            }
        })

        if(id) {
            const findAtivoById = await prisma.ativo.findUnique({
                where: {
                    id
                },
                include: {
                    classe: {
                        select: {
                            Nome: true
                        }
                    },
                    estoque: {
                        select: {
                            Nome: true
                        }
                    },
                    propietario:{
                        select: {
                            Nome: true
                        }
                    },
                }
            })

            return findAtivoById
        }
       
        return findAtivo
    }
}