const lista = [1, 4, 10, 6, 3, 7, 2, 5, 12, 8, 9, 11, 13]
const listaOrdenada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function linearSearch(list, chave) {
    for (let i = 0; i < list.length; i++){
        if (list[i] == chave){
            return i
        }
    }
    return -1
}

function BinarySearch(list, chave) {
    let ini = 0
    let fim = list.length-1
    while (ini <= fim) {
    let meio_index = parseInt((ini + fim) / 2)
        if (chave < list[meio_index]){
            fim = meio_index - 1
        } else if (chave > list[meio_index]) {
            ini = meio_index + 1
        } else {
            return meio_index
        }
    }
    return -1
}

console.log(linearSearch(lista, 6))

console.log(BinarySearch(listaOrdenada, 6))
