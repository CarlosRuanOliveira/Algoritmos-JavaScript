const lista = [1, 4, 4, 10, 6, 3, 7, 2, 5, 12, 8, 9, 11, 13]
function linearSearch(list, chave) {
    for (let i = 0; i < list.length; i++){
        if (list[i] == chave){
            return i
        }
    }
    return -1
}
console.log(linearSearch(lista, 6))