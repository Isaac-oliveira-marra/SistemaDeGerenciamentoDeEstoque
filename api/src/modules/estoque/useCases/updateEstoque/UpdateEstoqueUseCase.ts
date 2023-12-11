import { prisma } from "../../../../prisma/client";
import { UpdateEstoqueDto } from "../../dto/UpdateEstoqueDto";

export class UpdateEstoqueUseCase {
    async execute({Descricao, Endereco, Nome, Telefone, id}: UpdateEstoqueDto) {
        const estoque = await prisma.estoque.findUnique({
            where: {
                id
            }
        })

        if (!estoque) {
          return 'estoque nao existe'
        }
 
        const updateEstoque = await prisma.estoque.update({
            where: {
                id
            },
            data: {
                Descricao: Descricao ? Descricao : estoque.Descricao, 
                Endereco: Endereco ? Endereco : estoque.Endereco, 
                Nome: Nome ? Nome : estoque.Nome, 
                Telefone: Telefone ? Telefone : estoque.Telefone,
            }
        })
        
        return updateEstoque
    }
}

