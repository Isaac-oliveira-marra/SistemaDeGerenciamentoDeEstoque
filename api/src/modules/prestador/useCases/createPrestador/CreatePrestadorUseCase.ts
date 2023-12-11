import { prisma } from "../../../../prisma/client";
import { CreatePrestadorDto } from "../../dto/CreatePrestadorDto";

export class CreatePrestadorUseCase {
    async execute ({  Nome, Descricao, Endereco, Telefone, proprietarioId }: CreatePrestadorDto) {

        const propietario = await prisma.proprietario.findUnique({
            where: {
                id: proprietarioId
            }
        })

        if (!propietario) {
          return 'propietario nao existe'
        }
        
        const prestador = await prisma.prestador.create({
            data:{
                Nome, Descricao, Endereco, Telefone, proprietarioId
            }
        })
        
        return prestador;
    }
}

