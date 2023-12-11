import { prisma } from "../../../../prisma/client";
import { UpdateAtivoDto } from "../../dto/UpdateAtivoDto";

export class UpdateAtivoUseCase {
    async execute({ Descricao, Marca, Modelo, classeId, estoqueId, proprietarioId, id }: UpdateAtivoDto) {
        const ativo = await prisma.ativo.findUnique({
            where: {
                id
            }
        })

        const classe = await prisma.classe.findUnique({
            where: {
                id: classeId
            }
        })

        const estoque = await prisma.estoque.findUnique({
            where: {
                id: estoqueId
            }
        })

        const propietario = await prisma.proprietario.findUnique({
            where: {
                id: proprietarioId
            }
        })

        if (!classe) {
            return 'classe nao existe'
        }
        if (!estoque) {
            return 'estoque nao existe'
        }
        if (!propietario) {
            return 'propietario nao existe'
        }
        if (!ativo) {
          return 'ativo nao existe'
        }
 
        const updateAtivo = await prisma.ativo.update({
            where: {
                id
            },
            data: {
                Descricao: Descricao ? Descricao : ativo.Descricao,
                Marca: Marca ? Marca : ativo.Marca, 
                Modelo: Modelo ? Modelo : ativo.Modelo, 
                classeId: classeId ? classeId : ativo.classeId, 
                estoqueId: estoqueId ? estoqueId : ativo.estoqueId, 
                proprietarioId: proprietarioId ? proprietarioId : ativo.proprietarioId, 
            }
        })
        
        return updateAtivo
    }
}

