import { prisma } from "../../../../prisma/client";
import { GetManutencaoDto } from "../../dto/GetManutencaoDto";

export class GetManutencaoUseCase{
    async execute ({id}: GetManutencaoDto) {
        const findManutencao = await prisma.manutencao.findMany({
            include: {
                ativo: {
                    select: {
                        Descricao: true
                    }
                },
                prestador: {
                    select: {
                        Nome: true
                    }
                }
            }
        })

        if(id) {
            const findManutencaoById = await prisma.manutencao.findUnique({
                where: {
                    id
                },
                include: {
                    ativo: {
                        select: {
                            Descricao: true
                        }
                    },
                    prestador: {
                        select: {
                            Nome: true
                        }
                    }
                }
            })

            return findManutencaoById
        }
       
        return findManutencao
    }
}