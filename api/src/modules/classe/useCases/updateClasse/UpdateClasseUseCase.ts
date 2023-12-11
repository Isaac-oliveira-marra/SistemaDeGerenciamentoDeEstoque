import { prisma } from "../../../../prisma/client";
import { UpdateClasseDto } from "../../dto/UpdateClasseDto";

export class UpdateClasseUseCase {
    async execute({ Nome, Descricao, id}: UpdateClasseDto) {
        const classe = await prisma.classe.findUnique({
            where: {
                id
            }
        })

        if (!classe) {
          return 'classe nao existe'
        }
 
        const updateClasse = await prisma.classe.update({
            where: {
                id
            },
            data: {
                Descricao: Descricao ? Descricao : classe.Descricao, 
                Nome: Nome ? Nome : classe.Nome, 
            }
        })
        
        return updateClasse
    }
}

