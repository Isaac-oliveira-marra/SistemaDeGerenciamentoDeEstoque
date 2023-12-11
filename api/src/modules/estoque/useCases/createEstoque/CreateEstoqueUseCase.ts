import { prisma } from "../../../../prisma/client";
import { CreateEstoqueDTO } from "../../dto/CreateEstoqueDto";

export class CreateEstoqueUseCase {
    async execute ({Descricao, Nome, Endereco, Telefone}: CreateEstoqueDTO) {

        const estoque = await prisma.estoque.create({
            data:{
                Descricao, Nome, Endereco, Telefone
            }
        })
        
        return estoque;
    }
}

