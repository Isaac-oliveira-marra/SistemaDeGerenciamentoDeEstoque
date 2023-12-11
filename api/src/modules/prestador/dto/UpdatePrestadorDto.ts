export interface UpdatePrestadorDto {
    id: number,   
    Nome?: string,
    Descricao?: string,
    Telefone?: string,
    Endereco?: string,
    proprietarioId?: number
}