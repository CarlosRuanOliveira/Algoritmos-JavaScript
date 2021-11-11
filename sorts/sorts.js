function bubbleSort(alist) {
    const fim = alist.length - 1
    let troca = true
    while (troca) {
        troca = false
        for (i = 0; i < fim; i++) {
            if (alist[i] > alist[i+1]) {
                let aux = alist[i]
                alist[i] = alist[i+1]
                alist[i+1] = aux
                troca = true
            }
        }
    }
    return alist
}

function selectionSort(alist) {
    const fim = alist.length - 1
    for (j = 0; j < fim; j++) {
        let min_index = j
        for (i = j; i <= fim; i++) {
            if (alist[i] < alist[min_index]) {
                min_index = i
            }
        }
        if (alist[j] > alist[min_index]) {
            let aux = alist[j]
            alist[j] = alist[min_index]
            alist[min_index] = aux
        }
    }
    return alist
}

const lista = [1, 4, 4, 10, 6, 3, 7, 2, 5, 12, 8, 9, 11, 13]

//console.log(bubbleSort(lista))
console.log(selectionSort(lista))