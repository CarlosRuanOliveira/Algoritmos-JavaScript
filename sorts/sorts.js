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

function partition(alist, ini, fim) {
    let p = fim
    let aux = 0
    let i = 0.
        for (j = 0; j < fim; j++) {
            if (alist[j] < alist[p]) {
                aux = alist[j]
                alist[j] = alist[i]
                alist[i] = aux
                i += 1
            }
        }
        aux = alist[p]
        alist[p] = alist[i]
        alist[i] = aux
        p = i
    return p
}

function quickSort(alist, ini=0, fim=alist.length-1) {
    if (ini < fim) {
        let p = partition(alist, ini, fim)
        quickSort(alist, ini, p-1)
        quickSort(alist, p+1, fim)
    }
    return alist
}

function insertionSort(alist) {
    for (let i = 1; i < alist.length; i++) {
        aux = alist[i]
        j = i - 1
        while (j >= 0 && alist[j] > aux){
            alist[j+1] = alist[j]
            j -= 1
        }
        alist[j+1] = aux
    }
    return alist
}

const lista = [1, 4, 4, 10, 6, 3, 7, 2, 5, 12, 8, 9, 11, 13]

//console.log(bubbleSort(lista))
//console.log(selectionSort(lista))
//console.log(quickSort(lista))
console.log(insertionSort(lista))