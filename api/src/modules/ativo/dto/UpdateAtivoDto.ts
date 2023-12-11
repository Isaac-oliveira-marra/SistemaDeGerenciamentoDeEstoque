export interface UpdateAtivoDto {
    id: number,   
    Marca?: string,
    Modelo?: string,
    Descricao?: string,
    estoqueId?: number,
    proprietarioId?: number,
    classeId?: number,
}