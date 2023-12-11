import { prisma } from "../../../../prisma/client";
import { UpdatePrestadorDto } from "../../dto/UpdatePrestadorDto";

export class UpdatePrestadorUseCase {
    async execute({ Nome, Descricao, Endereco, Telefone, proprietarioId, id}: UpdatePrestadorDto) {
        const prestador = await prisma.prestador.findUnique({
            where: {
                id
            }
        })

        if (!prestador) {
          return 'prestador nao existe'
        }
 
        const updatePrestador = await prisma.prestador.update({
            where: {
                id
            },
            data: {
                Descricao: Descricao ? Descricao : prestador.Descricao, 
                Nome: Nome ? Nome : prestador.Nome, 
                Endereco: Endereco ? Endereco : prestador.Endereco, 
                Telefone: Telefone ? Telefone : prestador.Telefone, 
                proprietarioId: proprietarioId ? proprietarioId : prestador.proprietarioId
            }
        })
        
        return updatePrestador
    }
}

