import { prisma } from "../../../../prisma/client";
import { UpdateManutencaoDto } from "../../dto/UpdateManutencaoDto";

export class UpdateManutencaoUseCase {
    async execute({ Descricao, DataEnvio, DataSolucao, Valor, ativoId, prestadorId, id }: UpdateManutencaoDto) {

        const manutencao = await prisma.manutencao.findUnique({
            where: {
                id
            }
        })

        if (!manutencao) {
          return 'manutencao nao existe'
        }
 
        const updateManutencao = await prisma.manutencao.update({
            where: {
                id
            },
            data: {
                Descricao: Descricao ? Descricao : manutencao.Descricao, 
                DataEnvio: DataEnvio ? DataEnvio : manutencao.DataEnvio, 
                DataSolucao: DataSolucao ? DataSolucao : manutencao.DataSolucao, 
                Valor: Valor ? Valor : manutencao.Valor, 
                ativoId: ativoId ? ativoId : manutencao.ativoId, 
                prestadorId: prestadorId ? prestadorId : manutencao.prestadorId, 
            }
        })
        
        return updateManutencao
    }
}

