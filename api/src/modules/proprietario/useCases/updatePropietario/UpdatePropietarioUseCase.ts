import { prisma } from "../../../../prisma/client";
import { UpdateProprietarioDto } from "../../dto/UpdateProprietarioDto";

export class UpdatePropietarioUseCase {
    async execute({ Nome, Contato, Descricao, id}: UpdateProprietarioDto) {
        const proprietario = await prisma.proprietario.findUnique({
            where: {
                id
            }
        })

        if (!proprietario) {
          return 'proprietario nao existe'
        }
 
        const updatePropietario = await prisma.proprietario.update({
            where: {
                id
            },
            data: {
                Descricao: Descricao ? Descricao : proprietario.Descricao, 
                Nome: Nome ? Nome : proprietario.Nome, 
                Contato: Contato ? Contato : proprietario.Contato, 
            }
        })
        
        return updatePropietario
    }
}

