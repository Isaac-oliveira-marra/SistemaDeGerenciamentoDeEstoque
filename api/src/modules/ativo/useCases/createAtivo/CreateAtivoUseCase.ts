import { prisma } from "../../../../prisma/client";
import { CreateAtivoDto } from "../../dto/CreateAtivoDto";

export class CreateAtivoUseCase {
    async execute ({ Descricao, Marca, Modelo, classeId, estoqueId, proprietarioId }: CreateAtivoDto) {

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
          

        const ativo = await prisma.ativo.create({
            data:{
                Descricao, Marca, Modelo, classeId, estoqueId, proprietarioId
            }
        })
        
        return ativo;
    }
}

