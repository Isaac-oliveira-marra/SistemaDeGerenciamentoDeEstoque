import { prisma } from "../../../../prisma/client";
import { CreateClasseDto } from "../../dto/CreateClasseDto";

export class CreateClasseUseCase {
    async execute ({  Nome, Descricao }: CreateClasseDto) {

        const classe = await prisma.classe.create({
            data:{
                Nome, Descricao
            }
        })
        
        return classe;
    }
}

