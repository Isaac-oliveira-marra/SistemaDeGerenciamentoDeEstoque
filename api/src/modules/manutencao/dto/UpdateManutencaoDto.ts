export interface UpdateManutencaoDto {
    id: number,   
    DataEnvio?: string,
    Valor?: number,
    DataSolucao?: string,
    Descricao?: string,
    prestadorId?: number,
    ativoId?: number
}