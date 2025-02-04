export function FormatedCurrency(value: number){
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value/ 100)

}