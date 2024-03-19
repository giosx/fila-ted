export function criarFila(size = 5) {
    return [...new Array(size)]    

}

export function inserirItem(fila, item) {
    const primeiroItem = fila.indexOf(undefined)
    if(primeiroItem !== -1){
        console.log(primeiroItem)
        return
    }
    fila[primeiroItem] = item
}

export function remover(Fila) {


}
