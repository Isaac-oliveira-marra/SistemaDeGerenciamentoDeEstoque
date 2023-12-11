import { prisma } from "../../../../prisma/client";
import { CreatePropietarioDto } from "../../dto/CreateProprietarioDto";

export class CreateProprietarioUseCase {
    async execute ({  Nome, Contato, Descricao }: CreatePropietarioDto) {

        const proprietario = await prisma.proprietario.create({
            data:{
                Nome, Contato, Descricao
            }
        })
        
        return proprietario;
    }
}

