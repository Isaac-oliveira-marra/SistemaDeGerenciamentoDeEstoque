import { prisma } from "../../../../prisma/client";
import { CreateManutencaoDto } from "../../dto/CreateManutencaoDto";

export class CreateManutencaoUseCase {
    async execute ({ Descricao, DataEnvio, DataSolucao, Valor, ativoId, prestadorId }: CreateManutencaoDto) {

        const manutencao = await prisma.manutencao.create({
            data:{
                Descricao, DataEnvio, DataSolucao, Valor, ativoId, prestadorId
            }
        })
        
        return manutencao;
    }
}

