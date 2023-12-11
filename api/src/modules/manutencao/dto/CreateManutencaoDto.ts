export interface CreateManutencaoDto {
    DataEnvio: string,
    Valor: number,
    DataSolucao: string,
    Descricao: string,
    prestadorId: number,
    ativoId: number
}